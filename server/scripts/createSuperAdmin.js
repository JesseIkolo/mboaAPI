const mongoose = require('mongoose');
const { User } = require('../models/user.model');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

async function createSuperAdmin() {
    try {
        // Connexion à MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('Connecté à MongoDB');

        // Vérifier si le super admin existe déjà
        const existingAdmin = await User.findOne({ email: process.env.SUPER_ADMIN_EMAIL });
        if (existingAdmin) {
            console.log('Le super admin existe déjà');
            return;
        }

        // Créer le super admin
        const superAdmin = new User({
            username: process.env.SUPER_ADMIN_USERNAME,
            email: process.env.SUPER_ADMIN_EMAIL,
            phone: process.env.SUPER_ADMIN_PHONE,
            password: process.env.SUPER_ADMIN_PASSWORD,
            firstName: process.env.SUPER_ADMIN_FIRSTNAME,
            lastName: process.env.SUPER_ADMIN_LASTNAME,
            role: 'superadmin',
            adminType: 'superadmin', // Utilisation de la bonne valeur
            isVerified: true,
            status: 'active'
        });

        // Sauvegarder le super admin
        await superAdmin.save();
        console.log('Super admin créé avec succès');

    } catch (error) {
        console.error('Erreur lors de la création du super admin:', error);
        // Afficher plus de détails sur l'erreur
        if (error.errors) {
            Object.keys(error.errors).forEach(key => {
                console.error(`Erreur pour le champ ${key}:`, error.errors[key].message);
                // Afficher les valeurs possibles si c'est une erreur d'enum
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