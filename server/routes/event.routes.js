// --- routes/event.routes.js ---
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth.middleware');
const eventController = require('../controllers/event.controller');

// Route pour créer un nouvel événement (nécessite une authentification)
router.post('/', authMiddleware, eventController.createEvent);

// Route pour récupérer tous les événements
router.get('/', eventController.getAllEvents);

// Route pour récupérer un événement par ID
router.get('/:id', eventController.getEventById);

// Route pour mettre à jour un événement par ID (nécessite une authentification)
router.put('/:id', authMiddleware, eventController.updateEvent);

// Route pour supprimer un événement par ID (nécessite une authentification)
router.delete('/:id', authMiddleware, eventController.deleteEvent);

module.exports = router;
