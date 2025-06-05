// --- server.js ---
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerConfig = require('./config/swagger');

const userRoutes = require('./routes/user.routes.js');
const waitlistRoutes = require('./routes/waitlist.routes.js');
const eventRoutes = require('./routes/event.routes.js'); // Ajout de la route pour les événements
const partnerRoutes = require('./routes/partner.routes.js'); // Ajout des routes partenaires
const businessManagerRoutes = require('./routes/businessManager.routes.js');
const transactionRoutes = require('./routes/transaction.routes.js');
const categoryRoutes = require('./routes/category.routes.js');
const adminRoutes = require('./routes/admin.routes.js'); // Ajout des routes admin

// Charger les variables d'environnement
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Documentation Swagger
app.use('/api-docs', swaggerConfig.serve, swaggerConfig.setup);

// Routes principales
app.use('/api/users', userRoutes);
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/events', eventRoutes); // Utilisation des routes d'événements
app.use('/api/partners', partnerRoutes); // Utilisation des routes partenaires
app.use('/api', businessManagerRoutes); // Les routes de Business Manager sont sous /api/partner/:partnerId/managers
app.use('/api', transactionRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/admin', adminRoutes); // Utilisation des routes d'administration

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Erreur interne du serveur',
        error: err.message
    });
});

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

module.exports = app;
