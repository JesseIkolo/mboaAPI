const mongoose = require('mongoose');
const User = require('../models/user.model').User;
const Partner = require('../models/partner.model');
const Event = require('../models/event.model');
const Category = require('../models/category.model');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mboaAPI';

async function verifyData() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connecté à MongoDB\n');

        // Vérifier les catégories
        const categories = await Category.find();
        console.log('=== CATÉGORIES ===');
        console.log(`Nombre de catégories: ${categories.length}`);
        for (const category of categories) {
            console.log(`- ${category.name}`);
            console.log(`  Sous-catégories: ${category.subCategories.map(sc => sc.name).join(', ')}`);
        }
        console.log();

        // Vérifier les utilisateurs
        const users = await User.find();
        console.log('=== UTILISATEURS ===');
        console.log(`Nombre d'utilisateurs: ${users.length}`);
        for (const user of users) {
            console.log(`- ${user.firstName} ${user.lastName}`);
            console.log(`  Email: ${user.email}`);
            console.log(`  Username: ${user.username}`);
            console.log(`  Vérifié: ${user.isVerified ? 'Oui' : 'Non'}`);
            console.log();
        }

        // Vérifier les partenaires
        const partners = await Partner.find().populate('userId');
        console.log('=== PARTENAIRES BUSINESS ===');
        console.log(`Nombre de partenaires: ${partners.length}`);
        for (const partner of partners) {
            console.log(`- ${partner.companyName}`);
            console.log(`  Type d'abonnement: ${partner.subscriptionType}`);
            console.log(`  Statut: ${partner.subscriptionStatus}`);
            console.log(`  Utilisateur associé: ${partner.userId.firstName} ${partner.userId.lastName}`);
            console.log(`  Nombre de business managers: ${partner.businessManagers.length}`);
            console.log();
        }

        // Vérifier les événements
        const events = await Event.find()
            .populate('category')
            .populate('createdBy');
        
        console.log('=== ÉVÉNEMENTS ===');
        console.log(`Nombre d'événements: ${events.length}`);
        for (const event of events) {
            console.log(`- ${event.title}`);
            console.log(`  Description courte: ${event.shortDescription}`);
            console.log(`  Catégorie: ${event.category.name}`);
            console.log(`  Lieu: ${event.location.name}, ${event.location.city}`);
            console.log(`  Capacité: ${event.capacity} personnes`);
            console.log(`  Types de billets: ${event.ticketTypes.length}`);
            for (const ticket of event.ticketTypes) {
                console.log(`    * ${ticket.name}: ${ticket.price} XAF (${ticket.quantity} places)`);
            }
            console.log(`  Créé par: ${event.createdBy.firstName} ${event.createdBy.lastName}`);
            console.log(`  Date de début: ${event.startDate.toLocaleDateString()}`);
            console.log(`  Date de fin: ${event.endDate.toLocaleDateString()}`);
            console.log();
        }

    } catch (error) {
        console.error('Erreur lors de la vérification des données:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Déconnecté de MongoDB');
    }
}

// Exécuter la vérification
verifyData(); 