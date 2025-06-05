const Event = require('../models/event.model');
const Venue = require('../models/venue.model');

// Vérifier les conflits d'horaires pour un événement
exports.checkConflicts = async (req, res) => {
    try {
        const { eventId } = req.params;
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: "Événement non trouvé" });
        }

        // Rechercher les événements qui se chevauchent
        const conflictingEvents = await Event.find({
            _id: { $ne: eventId },
            venue: event.venue,
            $or: [
                {
                    startDate: { $lt: event.endDate },
                    endDate: { $gt: event.startDate }
                }
            ]
        });

        res.status(200).json({
            hasConflicts: conflictingEvents.length > 0,
            conflicts: conflictingEvents
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir des créneaux alternatifs
exports.getAlternativeSlots = async (req, res) => {
    try {
        const { eventId } = req.params;
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: "Événement non trouvé" });
        }

        // Calculer la durée de l'événement
        const duration = event.endDate - event.startDate;

        // Trouver les créneaux disponibles dans les 7 jours suivants
        const startSearch = new Date(event.startDate);
        const endSearch = new Date(event.startDate);
        endSearch.setDate(endSearch.getDate() + 7);

        const existingEvents = await Event.find({
            venue: event.venue,
            startDate: { $gte: startSearch, $lte: endSearch }
        }).sort('startDate');

        // Générer des créneaux alternatifs
        const alternativeSlots = [];
        let currentSlot = new Date(startSearch);

        while (currentSlot < endSearch) {
            const slotEnd = new Date(currentSlot.getTime() + duration);
            
            // Vérifier si le créneau est disponible
            const hasConflict = existingEvents.some(existingEvent => 
                (currentSlot < existingEvent.endDate && slotEnd > existingEvent.startDate)
            );

            if (!hasConflict) {
                alternativeSlots.push({
                    startDate: new Date(currentSlot),
                    endDate: new Date(slotEnd)
                });
            }

            // Avancer de 2 heures
            currentSlot.setHours(currentSlot.getHours() + 2);
        }

        res.status(200).json(alternativeSlots);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir des événements similaires
exports.getSimilarEvents = async (req, res) => {
    try {
        const { eventId } = req.params;
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: "Événement non trouvé" });
        }

        // Trouver des événements similaires basés sur la catégorie et la localisation
        const similarEvents = await Event.find({
            _id: { $ne: eventId },
            category: event.category,
            'location.city': event.location.city,
            startDate: { $gte: new Date() }
        }).limit(5);

        res.status(200).json(similarEvents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Vérifier la disponibilité d'un lieu
exports.checkVenueAvailability = async (req, res) => {
    try {
        const { venueId } = req.params;
        const { startDate, endDate } = req.query;

        const venue = await Venue.findById(venueId);
        if (!venue) {
            return res.status(404).json({ message: "Lieu non trouvé" });
        }

        // Vérifier les événements existants pour ce lieu
        const existingEvents = await Event.find({
            venue: venueId,
            $or: [
                {
                    startDate: { $lt: new Date(endDate) },
                    endDate: { $gt: new Date(startDate) }
                }
            ]
        });

        const isAvailable = existingEvents.length === 0;

        res.status(200).json({
            isAvailable,
            existingEvents: isAvailable ? [] : existingEvents
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 