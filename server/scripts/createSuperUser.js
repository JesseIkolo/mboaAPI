const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
require('dotenv').config();

async function createSuperUser() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connecté à MongoDB');

        // Créer un nouveau mot de passe haché
        const password = 'SuperUser@123';
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Mot de passe haché créé:', hashedPassword);

        // Vérifier si le super utilisateur existe déjà
        const existingUser = await User.findOne({ email: 'superuser@mboaevents.com' });
        if (existingUser) {
            console.log('Le super utilisateur existe déjà, suppression...');
            await User.deleteOne({ email: 'superuser@mboaevents.com' });
        }

        // Créer le super utilisateur
        const superUser = await User.create({
            username: 'superuser',
            email: 'superuser@mboaevents.com',
            phone: '+237600000001',
            password: hashedPassword,
            firstName: 'Super',
            lastName: 'User',
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
        const savedUser = await User.findById(superUser._id);
        console.log('Super utilisateur créé avec succès:', {
            username: savedUser.username,
            email: savedUser.email,
            role: savedUser.role,
            hashedPassword: savedUser.password
        });

        // Test de vérification du mot de passe
        const isMatch = await bcrypt.compare(password, savedUser.password);
        console.log('Test de vérification du mot de passe:', isMatch);

        console.log('\nInformations de connexion du super utilisateur :');
        console.log('Email:', 'superuser@mboaevents.com');
        console.log('Mot de passe:', 'SuperUser@123');

    } catch (error) {
        console.error('Erreur:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Déconnecté de MongoDB');
    }
}

createSuperUser(); 