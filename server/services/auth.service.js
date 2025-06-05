const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { User } = require('../models/user.model');
const { AdminLogger, ACTION_TYPES } = require('./adminLogger.service');
const EmailService = require('./email.service');
const tokenBlacklistService = require('./tokenBlacklist.service');

class AuthService {
    // Méthode sécurisée de comparaison à temps constant
    static async safeCompare(provided, stored) {
        if (!provided || !stored) return false;
        
        // Utiliser crypto.timingSafeEqual pour éviter les attaques de timing
        const providedHash = await bcrypt.hash(provided, stored.slice(0, 29));
        return crypto.timingSafeEqual(Buffer.from(providedHash), Buffer.from(stored));
    }

    static async login(email, password) {
        try {
            await new Promise(resolve => setTimeout(resolve, Math.random() * 200));

            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('Identifiants invalides');
            }

            const isAdmin = user.adminType || user.role === 'ADMIN';

            if (isAdmin) {
                if (user.isLocked()) {
                    // Révoquer toutes les sessions existantes
                    await tokenBlacklistService.revokeAllUserTokens(user._id);
                    
                    const remainingTime = Math.ceil((user.lockUntil - Date.now()) / 1000 / 60);
                    throw new Error(`Compte bloqué. Réessayez dans ${remainingTime} minutes`);
                }

                if (user.accountLocked && !user.isLocked()) {
                    await user.resetLoginAttempts();
                }
            }

            const isValid = await this.safeCompare(password, user.password);
            
            if (!isValid) {
                if (isAdmin) {
                    const isNowLocked = await user.incrementLoginAttempts();
                    if (isNowLocked) {
                        // Calculer la durée du blocage
                        const lockDuration = Math.min(30, Math.pow(2, user.lockCount - 1)) * 60 * 1000;

                        // Révoquer toutes les sessions existantes
                        await tokenBlacklistService.revokeAllUserTokens(user._id);

                        // Envoyer l'email de notification
                        await EmailService.sendAccountLockedEmail(
                            user,
                            lockDuration,
                            user.loginAttempts
                        );

                        // Journaliser le blocage avec plus de détails
                        await AdminLogger.logWithSecurity({
                            adminId: user._id,
                            actionType: ACTION_TYPES.SECURITY_ACTION,
                            action: 'Compte bloqué après tentatives échouées',
                            status: 'failure',
                            details: {
                                loginAttempts: user.loginAttempts,
                                lockCount: user.lockCount,
                                lockUntil: user.lockUntil,
                                emailSent: true,
                                sessionsRevoked: true,
                                ip: req.ip,
                                userAgent: req.headers['user-agent']
                            }
                        });
                        
                        throw new Error('Compte bloqué après tentatives échouées. Un email de notification a été envoyé.');
                    }

                    // Journaliser la tentative échouée
                    await AdminLogger.logWithSecurity({
                        adminId: user._id,
                        actionType: ACTION_TYPES.SECURITY_ACTION,
                        action: 'Tentative de connexion échouée',
                        status: 'failure',
                        details: {
                            loginAttempts: user.loginAttempts,
                            ip: req.ip,
                            userAgent: req.headers['user-agent']
                        }
                    });
                }
                
                throw new Error('Identifiants invalides');
            }

            if (isAdmin) {
                await user.resetLoginAttempts();
                
                await AdminLogger.logWithSecurity({
                    adminId: user._id,
                    actionType: ACTION_TYPES.SECURITY_ACTION,
                    action: 'Connexion réussie',
                    status: 'success',
                    details: {
                        ip: req.ip,
                        userAgent: req.headers['user-agent']
                    }
                });
            }

            // Générer un token avec plus d'informations de sécurité
            const token = jwt.sign(
                { 
                    userId: user._id,
                    role: user.role,
                    adminType: user.adminType,
                    sessionId: crypto.randomBytes(16).toString('hex'),
                    userAgent: req.headers['user-agent']
                },
                process.env.JWT_SECRET,
                { 
                    expiresIn: isAdmin ? '4h' : '24h' // Session plus courte pour les admins
                }
            );

            return {
                token,
                user: {
                    _id: user._id,
                    email: user.email,
                    username: user.username,
                    role: user.role,
                    adminType: user.adminType,
                    requiresPasswordChange: user.requiresPasswordChange
                }
            };
        } catch (error) {
            console.error('Erreur d\'authentification:', error);
            if (error.message.includes('bloqué')) {
                throw error;
            }
            throw new Error('Identifiants invalides');
        }
    }

    static async logout(userId, token) {
        try {
            // Ajouter le token à la liste noire
            await tokenBlacklistService.blacklistToken(token);

            // Si c'est un admin, journaliser la déconnexion
            const user = await User.findById(userId);
            if (user && user.adminType) {
                await AdminLogger.logWithSecurity({
                    adminId: userId,
                    actionType: ACTION_TYPES.SECURITY_ACTION,
                    action: 'Déconnexion',
                    status: 'success'
                });
            }

            return true;
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
            return false;
        }
    }
}

module.exports = AuthService; 