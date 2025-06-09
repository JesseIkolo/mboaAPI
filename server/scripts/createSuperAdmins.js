require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Vérification des variables d'environnement
if (!process.env.MONGODB_URI) {
    console.error('Erreur: MONGODB_URI n\'est pas défini dans le fichier .env');
    process.exit(1);
}

// Configuration de la connexion MongoDB avec gestion d'erreur
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => {
        console.error('Erreur de connexion à MongoDB:', err);
        process.exit(1);
    });

// Schéma pour le Super Admin
const superAdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, default: 'SUPER_ADMIN' },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date },
    lockCount: { type: Number, default: 0 },
    accountLocked: { type: Boolean, default: false }
});

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);

// Fonction sécurisée pour hasher le mot de passe
async function secureHash(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    // S'assurer que le hash est compatible avec la méthode de comparaison de l'API
    const testHash = await bcrypt.hash(password, hash.slice(0, 29));
    return testHash;
}

// Données des super administrateurs
const superAdmins = [
    {
        username: process.env.SUPER_ADMIN_USERNAME,
        email: process.env.SUPER_ADMIN_EMAIL,
        phone: process.env.SUPER_ADMIN_PHONE,
        password: process.env.SUPER_ADMIN_PASSWORD,
        firstName: process.env.SUPER_ADMIN_FIRSTNAME,
        lastName: process.env.SUPER_ADMIN_LASTNAME
    },
    {
        username: "superadmin2",
        email: "admin2@mboaevents.com",
        phone: "+237600000001",
        password: "SuperAdmin2@123",
        firstName: "Super2",
        lastName: "Admin2"
    }
];

// Fonction pour créer les super administrateurs
async function createSuperAdmins() {
    try {
        for (const adminData of superAdmins) {
            // Vérifier si l'admin existe déjà
            const existingAdmin = await SuperAdmin.findOne({ email: adminData.email });
            if (existingAdmin) {
                console.log(`Super Admin existe déjà : ${adminData.email}`);
                continue;
            }

            // Hasher le mot de passe de manière sécurisée
            const hashedPassword = await secureHash(adminData.password);
            
            // Créer le super admin avec le mot de passe hashé
            const superAdmin = new SuperAdmin({
                ...adminData,
                password: hashedPassword
            });

            // Sauvegarder dans la base de données
            await superAdmin.save();
            console.log(`Super Admin créé avec succès : ${adminData.email}`);
        }

        console.log('Opération terminée !');
    } catch (error) {
        console.error('Erreur lors de la création des super administrateurs:', error);
    } finally {
        // Fermer la connexion à la base de données
        await mongoose.connection.close();
        console.log('Connexion à la base de données fermée');
    }
}

// Exécuter la fonction
createSuperAdmins();