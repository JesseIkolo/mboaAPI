// --- models/event.model.js ---
const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    utilisateur: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Référence au modèle utilisateur
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    imageCouverture: String,
    galerie: [String],
    description: String,
    categorie: {
        type: String,
        required: true
    },
    dateHeureDebut: {
        type: Date,
        required: true
    },
    dateHeureFin: Date,
    localisation: {
        type: String,
        required: true
    },
    typeEvenement: {
        type: String,
        enum: ['Gratuit', 'Payant'],
        required: true
    },
    proposerMenu: Boolean,
    photosMenu: [String],
    visibilite: {
        type: String,
        enum: ['public', 'reseau'],
        default: 'reseau' // Par défaut, la visibilité est sur le réseau
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
