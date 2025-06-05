const mongoose = require('mongoose');
const Event = require('../models/event.model');

// Configuration MongoDB
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mboaevents';
mongoose.set('debug', true);

async function cleanEvents() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connecté à MongoDB:', MONGODB_URI);

        // Supprimer toutes les collections
        const collections = ['events', 'categories', 'users', 'partners'];
        for (const collection of collections) {
            const result = await mongoose.connection.collection(collection).deleteMany({});
            console.log(`${result.deletedCount} documents supprimés de la collection ${collection}`);
        }

    } catch (error) {
        console.error('Erreur lors du nettoyage des données:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Déconnecté de MongoDB');
    }
}

// Exécuter le nettoyage
cleanEvents(); 