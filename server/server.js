// --- server.js ---
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/user.routes.js');
const waitlistRoutes = require('./routes/waitlist.routes.js');
const eventRoutes = require('./routes/event.routes.js'); // Ajout de la route pour les événements

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes principales
app.use('/api/users', userRoutes);
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/events', eventRoutes); // Utilisation des routes d'événements


module.exports = app;
