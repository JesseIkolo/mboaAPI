const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

// Configuration avant tous les tests
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    // Configuration de Mongoose
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

// Nettoyage après tous les tests
afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

// Configuration avant chaque test
beforeEach(async () => {
    // Nettoyer toutes les collections
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany();
    }
});

// Configuration des variables d'environnement pour les tests
process.env.JWT_SECRET = 'test-secret';
process.env.SMTP_HOST = 'smtp.test.com';
process.env.SMTP_PORT = '587';
process.env.SMTP_USER = 'test@test.com';
process.env.SMTP_PASS = 'test-password';
process.env.SMTP_FROM = 'noreply@mboaevents.com';
process.env.SMTP_SECURE = 'false'; 