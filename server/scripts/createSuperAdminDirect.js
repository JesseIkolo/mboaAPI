const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
require('dotenv').config();

async function createSuperAdminDirect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connecté à MongoDB');

        // Supprimer tous les super admins existants
        await User.deleteMany({ role: 'superadmin' });
        console.log('Super admins existants supprimés');

        // Créer un nouveau mot de passe haché
        const password = 'Admin123!@#';
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Mot de passe haché créé:', hashedPassword);

        // Créer le super admin directement avec le modèle Mongoose
        const superAdmin = await User.create({
            username: 'superadmin',
            email: 'admin@mboaevents.com',
            phone: '+237123456789',
            password: hashedPassword, // Le hook pre-save ne sera pas déclenché ici
            firstName: 'Super',
            lastName: 'Admin',
            role: 'superadmin',
            adminType: 'superadmin',
            isVerified: true,
            status: 'active',
            isActive: true,
            emailVerified: true,
            phoneVerified: true,
            accountVerified: true,
            isAdminValidated: true,
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

        // Vérifier que le mot de passe est correctement stocké
        const savedUser = await User.findById(superAdmin._id);
        console.log('Super admin créé avec succès:', {
            username: savedUser.username,
            email: savedUser.email,
            role: savedUser.role,
            hashedPassword: savedUser.password
        });

        // Test de vérification du mot de passe
        const isMatch = await bcrypt.compare(password, savedUser.password);
        console.log('Test de vérification du mot de passe:', isMatch);

    } catch (error) {
        console.error('Erreur:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Déconnecté de MongoDB');
    }
}

createSuperAdminDirect(); 