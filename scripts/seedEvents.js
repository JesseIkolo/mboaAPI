const mongoose = require('mongoose');
const Event = require('../models/event.model');
const Category = require('../models/category.model');
const User = require('../models/user.model').User;
const Partner = require('../models/partner.model');
require('dotenv').config();

// Configuration MongoDB
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mboaevents';
console.log('Utilisation de la base de données:', MONGODB_URI);

mongoose.set('debug', true);

// Configuration du Super Admin depuis les variables d'environnement
const superAdminData = {
    username: process.env.SUPER_ADMIN_USERNAME || 'superadmin',
    email: process.env.SUPER_ADMIN_EMAIL || 'admin@mboaevents.com',
    phone: process.env.SUPER_ADMIN_PHONE || '+237600000000',
    password: process.env.SUPER_ADMIN_PASSWORD || 'SuperAdmin@123',
    firstName: process.env.SUPER_ADMIN_FIRSTNAME || 'Super',
    lastName: process.env.SUPER_ADMIN_LASTNAME || 'Admin',
    role: 'superadmin',
    isVerified: true,
    emailVerified: true
};

// Fonction pour créer le Super Admin
async function createSuperAdmin() {
    try {
        const existingSuperAdmin = await User.findOne({ email: superAdminData.email });
        if (existingSuperAdmin) {
            console.log('Le Super Admin existe déjà');
            return existingSuperAdmin;
        }

        const superAdmin = new User(superAdminData);
        await superAdmin.save();
        console.log('Super Admin créé avec succès');
        return superAdmin;
    } catch (error) {
        console.error('Erreur lors de la création du Super Admin:', error);
        throw error;
    }
}

// ... Le reste du code existant ...

// Fonction principale
async function main() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connecté à MongoDB');

        // Création du Super Admin en premier
        await createSuperAdmin();
        console.log('Super Admin initialisé');

        const category = await createDefaultCategory();
        console.log('Catégorie créée/trouvée');

        const users = await createUsers();
        console.log('Utilisateurs créés/trouvés');

        const partners = await createPartners(users);
        console.log('Partenaires créés/trouvés');

        await createEvents(category, users, partners);

        console.log('Script terminé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'exécution du script:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Déconnecté de MongoDB');
    }
}

// Exécuter le script
main(); 