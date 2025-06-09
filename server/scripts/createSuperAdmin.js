const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/user.model');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

// Fonction sécurisée pour hasher le mot de passe
async function secureHash(password) {
    return bcrypt.hash(password, 10);
}

// Fonction pour activer et valider le compte super admin
async function activateAndValidateSuperAdmin(email) {
    try {
        const superAdmin = await User.findOne({ email });
        if (!superAdmin) {
            console.log('Super admin non trouvé');
            return false;
        }

        // Mettre à jour le statut et les validations
        const updates = {
            isVerified: true,
            status: 'active',
            isActive: true,
            emailVerified: true,
            phoneVerified: true,
            accountVerified: true,
            isAdminValidated: true,
            verificationToken: null,
            verificationTokenExpires: null,
            lastVerificationAttempt: new Date(),
            accountActivatedAt: new Date(),
            requiresPasswordChange: false,
            lastPasswordChange: new Date()
        };

        // Appliquer les mises à jour
        const updatedAdmin = await User.findOneAndUpdate(
            { email },
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (updatedAdmin) {
            console.log('Compte super admin activé et validé avec succès:', {
                email: updatedAdmin.email,
                status: updatedAdmin.status,
                isVerified: updatedAdmin.isVerified,
                isActive: updatedAdmin.isActive,
                isAdminValidated: updatedAdmin.isAdminValidated
            });
            return true;
        }

        return false;
    } catch (error) {
        console.error('Erreur lors de l\'activation du compte super admin:', error);
        return false;
    }
}

async function createSuperAdmin() {
    try {
        // Connexion à MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('Connecté à MongoDB');

        // Vérifier si le super admin existe déjà
        const existingAdmin = await User.findOne({ email: process.env.SUPER_ADMIN_EMAIL });
        if (existingAdmin) {
            console.log('Le super admin existe déjà');
            // Activer et valider le compte existant
            await activateAndValidateSuperAdmin(process.env.SUPER_ADMIN_EMAIL);
            return;
        }

        // Hasher le mot de passe de manière sécurisée
        const hashedPassword = await secureHash(process.env.SUPER_ADMIN_PASSWORD);

        // Créer le super admin
        const superAdmin = new User({
            username: process.env.SUPER_ADMIN_USERNAME,
            email: process.env.SUPER_ADMIN_EMAIL,
            phone: process.env.SUPER_ADMIN_PHONE,
            password: hashedPassword,
            firstName: process.env.SUPER_ADMIN_FIRSTNAME,
            lastName: process.env.SUPER_ADMIN_LASTNAME,
            role: 'superadmin',
            adminType: 'superadmin',
            isVerified: true,
            status: 'active',
            // Champs de sécurité
            loginAttempts: 0,
            lockUntil: null,
            lockCount: 0,
            accountLocked: false,
            requiresPasswordChange: false,
            lastPasswordChange: new Date(),
            isActive: true,
            createdAt: new Date(),
            // Champs de validation supplémentaires
            emailVerified: true,
            phoneVerified: true,
            accountVerified: true,
            isAdminValidated: true,
            verificationToken: null,
            verificationTokenExpires: null,
            lastVerificationAttempt: new Date(),
            accountActivatedAt: new Date(),
            // Permissions par défaut pour le super admin
            permissions: [
                'manage_users',
                'manage_partners',
                'manage_ads',
                'manage_events',
                'manage_chats',
                'manage_transactions',
                'manage_categories',
                'validate_admins'
            ]
        });

        // Sauvegarder le super admin
        await superAdmin.save();
        console.log('Super admin créé avec succès:', {
            username: superAdmin.username,
            email: superAdmin.email,
            role: superAdmin.role,
            adminType: superAdmin.adminType,
            status: superAdmin.status,
            isVerified: superAdmin.isVerified,
            isAdminValidated: superAdmin.isAdminValidated
        });

        // Activer et valider le compte nouvellement créé
        await activateAndValidateSuperAdmin(superAdmin.email);

    } catch (error) {
        console.error('Erreur lors de la création du super admin:', error);
        if (error.errors) {
            Object.keys(error.errors).forEach(key => {
                console.error(`Erreur pour le champ ${key}:`, error.errors[key].message);
                if (error.errors[key].kind === 'enum') {
                    console.error('Valeurs possibles:', error.errors[key].properties.enumValues);
                }
            });
        }
    } finally {
        await mongoose.disconnect();
        console.log('Déconnecté de MongoDB');
    }
}

// Exécuter la création du super admin
createSuperAdmin();