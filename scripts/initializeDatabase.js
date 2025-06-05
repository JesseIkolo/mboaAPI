const mongoose = require('mongoose');
const User = require('../models/user.model').User;
const Partner = require('../models/partner.model');
const Event = require('../models/event.model');
const Category = require('../models/category.model');
require('dotenv').config();

// Configuration de la base de données
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mboaevents';

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

// Réutilisation des données des scripts précédents
const userData = [
    {
        username: 'john_doe',
        email: 'john@example.com',
        phone: '+237670000001',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        isVerified: true,
        emailVerified: true
    },
    {
        username: 'jane_smith',
        email: 'jane@example.com',
        phone: '+237670000002',
        password: 'password123',
        firstName: 'Jane',
        lastName: 'Smith',
        isVerified: true,
        emailVerified: true
    },
    {
        username: 'business_user1',
        email: 'business1@example.com',
        phone: '+237670000003',
        password: 'password123',
        firstName: 'Business',
        lastName: 'User One',
        isVerified: true,
        emailVerified: true
    },
    {
        username: 'business_user2',
        email: 'business2@example.com',
        phone: '+237670000004',
        password: 'password123',
        firstName: 'Business',
        lastName: 'User Two',
        isVerified: true,
        emailVerified: true
    }
];

const partnerData = [
    {
        companyName: "EventPro Cameroun",
        subscriptionType: "premium",
        subscriptionStatus: "active",
        isVerified: true
    },
    {
        companyName: "Festiv'All",
        subscriptionType: "mboaPlus",
        subscriptionStatus: "active",
        isVerified: true
    }
];

// Réutilisation des fonctions des scripts précédents
async function createDefaultCategory() {
    try {
        const existingCategory = await Category.findOne({ name: 'Divertissement' });
        if (existingCategory) {
            return existingCategory;
        }

        const category = new Category({
            name: 'Divertissement',
            description: 'Événements de divertissement',
            icon: 'https://example.com/entertainment-icon.png',
            color: '#FF5733',
            subCategories: [
                {
                    name: 'Concert',
                    description: 'Événements musicaux',
                    icon: 'https://example.com/concert-icon.png'
                },
                {
                    name: 'Festival',
                    description: 'Festivals culturels',
                    icon: 'https://example.com/festival-icon.png'
                }
            ]
        });

        await category.save();
        console.log('Catégorie créée avec succès');
        return category;
    } catch (error) {
        console.error('Erreur lors de la création de la catégorie:', error);
        throw error;
    }
}

async function createUsers() {
    try {
        const users = [];
        for (const data of userData) {
            const existingUser = await User.findOne({ email: data.email });
            if (existingUser) {
                users.push(existingUser);
                continue;
            }

            const user = new User(data);
            await user.save();
            users.push(user);
            console.log(`Utilisateur créé: ${user.firstName} ${user.lastName}`);
        }
        return users;
    } catch (error) {
        console.error('Erreur lors de la création des utilisateurs:', error);
        throw error;
    }
}

async function createPartners(users) {
    try {
        const partners = [];
        const businessUsers = users.slice(2); // Les deux derniers utilisateurs

        for (let i = 0; i < partnerData.length; i++) {
            const data = partnerData[i];
            const userId = businessUsers[i]._id;

            const existingPartner = await Partner.findOne({ userId });
            if (existingPartner) {
                partners.push(existingPartner);
                continue;
            }

            const now = new Date();
            const partner = new Partner({
                ...data,
                userId,
                subscriptionStartDate: now,
                subscriptionEndDate: new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000), // 1 an
                businessManagers: [{
                    userId,
                    permissions: {
                        canCreateEvent: true,
                        canDeleteEvent: true,
                        canEditCompanyProfile: true,
                        canManageMessages: true,
                        canContactSupport: true,
                        canViewTransactions: true,
                        canViewStatistics: true
                    }
                }]
            });

            await partner.save();
            partners.push(partner);
            console.log(`Partenaire créé: ${partner.companyName}`);
        }
        return partners;
    } catch (error) {
        console.error('Erreur lors de la création des partenaires:', error);
        throw error;
    }
}

// Réutilisation des données d'événements du script précédent
const eventData = [
    {
        title: "Festival de la Musique Camerounaise",
        description: "Un festival célébrant la riche culture musicale du Cameroun avec des artistes locaux et internationaux.",
        shortDescription: "Célébration de la musique camerounaise",
        location: {
            name: "Palais des Sports",
            address: "Rue du Sport",
            city: "Yaoundé",
            coordinates: {
                coordinates: [11.5021, 3.8480]
            }
        },
        capacity: 5000,
        ticketTypes: [
            {
                name: "Standard",
                price: 5000,
                quantity: 3000,
                description: "Accès général au festival"
            },
            {
                name: "VIP",
                price: 15000,
                quantity: 500,
                description: "Accès VIP avec zone réservée"
            }
        ]
    },
    {
        title: "Soirée Stand-up Comedy",
        description: "Une soirée de rire avec les meilleurs humoristes du Cameroun.",
        shortDescription: "Stand-up comedy à Douala",
        location: {
            name: "Canal Olympia",
            address: "Avenue de la Joie",
            city: "Douala",
            coordinates: {
                coordinates: [9.7023, 4.0511]
            }
        },
        capacity: 300,
        ticketTypes: [
            {
                name: "Entrée unique",
                price: 3000,
                quantity: 300,
                description: "Place assise garantie"
            }
        ]
    },
    {
        title: "Exposition d'Art Contemporain",
        description: "Découvrez les œuvres des artistes contemporains camerounais les plus prometteurs.",
        shortDescription: "Art contemporain camerounais",
        location: {
            name: "Musée National",
            address: "Rue des Arts",
            city: "Yaoundé",
            coordinates: {
                coordinates: [11.5021, 3.8480]
            }
        },
        capacity: 200,
        ticketTypes: [
            {
                name: "Entrée standard",
                price: 2000,
                quantity: 200,
                description: "Accès à l'exposition"
            }
        ]
    },
    {
        title: "Festival Gastronomique",
        description: "Un voyage culinaire à travers les saveurs du Cameroun.",
        shortDescription: "Découverte de la cuisine camerounaise",
        location: {
            name: "Place du Marché",
            address: "Boulevard Central",
            city: "Douala",
            coordinates: {
                coordinates: [9.7023, 4.0511]
            }
        },
        capacity: 1000,
        ticketTypes: [
            {
                name: "Pass Dégustation",
                price: 10000,
                quantity: 1000,
                description: "Accès à tous les stands de dégustation"
            }
        ]
    },
    {
        title: "Concert de Jazz",
        description: "Une soirée jazz avec les meilleurs musiciens de la scène locale.",
        shortDescription: "Jazz night à Yaoundé",
        location: {
            name: "Le Jazz Club",
            address: "Rue de la Musique",
            city: "Yaoundé",
            coordinates: {
                coordinates: [11.5021, 3.8480]
            }
        },
        capacity: 150,
        ticketTypes: [
            {
                name: "Entrée standard",
                price: 5000,
                quantity: 150,
                description: "Place assise non garantie"
            }
        ]
    },
    {
        title: "Tournoi de Football Amateur",
        description: "Compétition amicale entre équipes locales.",
        shortDescription: "Football amateur",
        location: {
            name: "Stade Municipal",
            address: "Avenue du Sport",
            city: "Douala",
            coordinates: {
                coordinates: [9.7023, 4.0511]
            }
        },
        capacity: 2000,
        ticketTypes: [
            {
                name: "Entrée générale",
                price: 1000,
                quantity: 2000,
                description: "Accès aux tribunes"
            }
        ]
    },
    {
        title: "Atelier de Danse Traditionnelle",
        description: "Apprenez les danses traditionnelles camerounaises.",
        shortDescription: "Danse traditionnelle",
        location: {
            name: "Centre Culturel",
            address: "Rue de la Culture",
            city: "Yaoundé",
            coordinates: {
                coordinates: [11.5021, 3.8480]
            }
        },
        capacity: 50,
        ticketTypes: [
            {
                name: "Participation",
                price: 3000,
                quantity: 50,
                description: "Cours de 2 heures avec instructeur"
            }
        ]
    },
    {
        title: "Salon du Livre",
        description: "Rencontrez vos auteurs camerounais préférés.",
        shortDescription: "Salon littéraire",
        location: {
            name: "Bibliothèque Nationale",
            address: "Avenue des Lettres",
            city: "Yaoundé",
            coordinates: {
                coordinates: [11.5021, 3.8480]
            }
        },
        capacity: 500,
        ticketTypes: [
            {
                name: "Pass journée",
                price: 2000,
                quantity: 500,
                description: "Accès à toutes les activités"
            }
        ]
    },
    {
        title: "Fashion Week Cameroun",
        description: "Le meilleur de la mode camerounaise.",
        shortDescription: "Mode et fashion",
        location: {
            name: "Hôtel Hilton",
            address: "Boulevard de la Mode",
            city: "Yaoundé",
            coordinates: {
                coordinates: [11.5021, 3.8480]
            }
        },
        capacity: 800,
        ticketTypes: [
            {
                name: "Standard",
                price: 10000,
                quantity: 600,
                description: "Place assise standard"
            },
            {
                name: "VIP",
                price: 25000,
                quantity: 200,
                description: "Place assise premium et cocktail"
            }
        ]
    },
    {
        title: "Festival du Film Africain",
        description: "Projection des meilleurs films africains de l'année.",
        shortDescription: "Cinéma africain",
        location: {
            name: "Cinéma Le Wouri",
            address: "Rue du Cinéma",
            city: "Douala",
            coordinates: {
                coordinates: [9.7023, 4.0511]
            }
        },
        capacity: 400,
        ticketTypes: [
            {
                name: "Pass Festival",
                price: 15000,
                quantity: 400,
                description: "Accès à toutes les projections"
            }
        ]
    }
];

async function createEvents(category, users, partners) {
    try {
        const currentDate = new Date();
        
        for (let i = 0; i < eventData.length; i++) {
            const eventInfo = eventData[i];
            const existingEvent = await Event.findOne({ title: eventInfo.title });
            if (existingEvent) {
                console.log(`L'événement "${eventInfo.title}" existe déjà.`);
                continue;
            }

            const creator = partners[i % partners.length];
            const startDate = new Date(currentDate.getTime() + Math.random() * 90 * 24 * 60 * 60 * 1000);
            const endDate = new Date(startDate.getTime() + Math.random() * 3 * 24 * 60 * 60 * 1000);

            const event = new Event({
                ...eventInfo,
                category: category._id,
                createdBy: creator.userId,
                startDate,
                endDate,
                status: 'published',
                visibility: 'public',
                isPublic: true
            });

            await event.save();
            console.log(`Événement créé: ${event.title}`);
        }
    } catch (error) {
        console.error('Erreur lors de la création des événements:', error);
        throw error;
    }
}

// Fonction principale d'initialisation
async function initializeDatabase() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connecté à MongoDB:', MONGODB_URI);

        // Création du Super Admin
        await createSuperAdmin();

        // Création des autres données
        const category = await createDefaultCategory();
        const users = await createUsers();
        const partners = await createPartners(users);
        await createEvents(category, users, partners);

        console.log('Initialisation de la base de données terminée avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Déconnecté de MongoDB');
    }
}

// Exécuter l'initialisation
initializeDatabase(); 