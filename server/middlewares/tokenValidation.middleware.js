// --- middlewares/tokenValidation.middleware.js ---
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const tokenBlacklistService = require('../services/tokenBlacklist.service');
const { AdminLogger, ACTION_TYPES } = require('../services/adminLogger.service');

const validateToken = async (req, res, next) => {
    try {
        // Vérifier la présence du token
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token manquant' });
        }

        // Vérifier si le token est dans la liste noire
        if (tokenBlacklistService.isBlacklisted(token)) {
            return res.status(401).json({ message: 'Session invalide' });
        }

        // Décoder et vérifier le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Vérifier si l'utilisateur existe toujours
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }

        // Vérifier si le compte est bloqué
        if (user.isLocked && user.isLocked()) {
            // Révoquer tous les tokens de l'utilisateur
            await tokenBlacklistService.revokeAllUserTokens(user._id);

            // Journaliser la tentative d'accès
            if (user.adminType) {
                await AdminLogger.logWithSecurity({
                    adminId: user._id,
                    actionType: ACTION_TYPES.SECURITY_ACTION,
                    action: 'Tentative d\'accès avec un compte bloqué',
                    status: 'failure'
                });
            }

            return res.status(403).json({ 
                message: 'Compte bloqué',
                remainingTime: Math.ceil((user.lockUntil - Date.now()) / (60 * 1000)) // en minutes
            });
        }

        // Vérifier si les tokens de l'utilisateur ont été révoqués globalement
        if (await tokenBlacklistService.isUserTokensRevoked(user._id, decoded.iat * 1000)) {
            return res.status(401).json({ message: 'Session révoquée' });
        }

        // Vérifier le statut du compte admin
        if (user.adminType && !user.isAdminValidated) {
            return res.status(403).json({ message: 'Compte administrateur en attente de validation' });
        }

        // Ajouter l'utilisateur à la requête
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token invalide' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expiré' });
        }
        console.error('Erreur de validation du token:', error);
        res.status(500).json({ message: 'Erreur lors de la validation de la session' });
    }
};

// Middleware pour les routes nécessitant une session active et valide
const requireValidSession = [validateToken];

module.exports = {
    validateToken,
    requireValidSession
}; 