// --- scripts/initSuperAdmin.js ---
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { User, ADMIN_ROLES } = require('../models/user.model');

const createSuperAdmin = async () => {
    try {
        // Connexion à MongoDB
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGODB_URI n\'est pas défini dans le fichier .env');
        }

        await mongoose.connect(uri);
        console.log('Connecté à MongoDB');

        // Vérifier si un super admin existe déjà
        const existingSuperAdmin = await User.findOne({ adminType: ADMIN_ROLES.SUPERADMIN });
        if (existingSuperAdmin) {
            console.log('Un super administrateur existe déjà');
            process.exit(0);
        }

        // Créer le super admin
        const superAdmin = new User({
            username: process.env.SUPER_ADMIN_USERNAME || 'superadmin',
            email: process.env.SUPER_ADMIN_EMAIL || 'admin@mboaevents.com',
            phone: process.env.SUPER_ADMIN_PHONE || '+237600000000',
            password: await bcrypt.hash(process.env.SUPER_ADMIN_PASSWORD || 'SuperAdmin@123', 10),
            firstName: process.env.SUPER_ADMIN_FIRSTNAME || 'Super',
            lastName: process.env.SUPER_ADMIN_LASTNAME || 'Admin',
            role: ADMIN_ROLES.SUPERADMIN,
            adminType: ADMIN_ROLES.SUPERADMIN,
            isAdminValidated: true,
            emailVerified: true,
            isVerified: true
        });

        await superAdmin.save();
        console.log('Super administrateur créé avec succès');
        console.log('Identifiants par défaut (si non spécifiés dans .env):');
        console.log('Username:', process.env.SUPER_ADMIN_USERNAME || 'superadmin');
        console.log('Password:', process.env.SUPER_ADMIN_PASSWORD || 'SuperAdmin@123');
        console.log('\nVeuillez changer le mot de passe après la première connexion');

    } catch (error) {
        console.error('Erreur lors de la création du super admin:', error.message);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
};

createSuperAdmin(); 