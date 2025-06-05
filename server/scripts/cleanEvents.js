const mongoose = require('mongoose');
const Event = require('../models/event.model');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mboaAPI';

async function cleanEvents() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connecté à MongoDB');

        const result = await Event.deleteMany({});
        console.log(`${result.deletedCount} événements ont été supprimés.`);

    } catch (error) {
        console.error('Erreur lors du nettoyage des événements:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Déconnecté de MongoDB');
    }
}

// Exécuter le nettoyage
cleanEvents(); 