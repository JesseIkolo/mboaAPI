require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user.model');

const MONGODB_URI = process.env.MONGODB_URI;

async function deleteSuperAdmins() {
    try {
        // Connexion à MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('Connecté à MongoDB');

        // Supprimer tous les super admins
        const result = await User.deleteMany({ role: 'superadmin' });
        console.log(`${result.deletedCount} super admin(s) supprimé(s)`);

    } catch (error) {
        console.error('Erreur lors de la suppression des super administrateurs:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Connexion à la base de données fermée');
    }
}

// Exécuter la suppression
deleteSuperAdmins(); 