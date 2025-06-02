// --- controllers/event.controller.js ---
const Event = require('../models/event.model');
const User = require('../models/user.model');

// Fonction asynchrone pour créer un nouvel événement
exports.createEvent = async (req, res) => {
    try {
        //console.log("UTILISATEUR DE LA REQUETE", req.user)
        const userId = req.user.userId;
        const {
            nom,
            imageCouverture,
            galerie,
            description,
            categorie,
            dateHeureDebut,
            dateHeureFin,
            localisation,
            typeEvenement,
            proposerMenu,
            photosMenu
        } = req.body;

        // Validation des données de l'événement
        if (!nom || !categorie || !dateHeureDebut || !localisation || !typeEvenement) {
            return res.status(400).json({ 
                message: "Tous les champs obligatoires doivent être fournis.",
                missingFields: {
                    nom: !nom,
                    categorie: !categorie,
                    dateHeureDebut: !dateHeureDebut,
                    localisation: !localisation,
                    typeEvenement: !typeEvenement
                }
            });
        }

        if (typeEvenement !== 'Gratuit' && typeEvenement !== 'Payant') {
            return res.status(400).json({ message: "Le type d'événement doit être 'Gratuit' ou 'Payant'." });
        }

        try {
          new Date(dateHeureDebut).toISOString();
        } catch (error){
           return res.status(400).json({ message: "Le champ dateHeureDebut doit être une date ISO valide." });
        }
        if (dateHeureFin) {
             try {
                new Date(dateHeureFin).toISOString();
              } catch (error){
                 return res.status(400).json({ message: "Le champ dateHeureFin doit être une date ISO valide." });
              }
        }


        const user = await User.findById(userId).populate('followers').populate('following');
        console.log("USER QUI CREATION DUN EVENEMENT", user)
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }
        let visibilite = 'reseau';
        if (user && user.isSubscribed) {
            visibilite = 'public';
        } else {
            const networkIds = new Set();
            user.followers.forEach(follower => networkIds.add(follower._id.toString()));
            user.following.forEach(followee => networkIds.add(followee._id.toString()));
            req.user.network = Array.from(networkIds);
        }

        const nouvelEvenement = new Event({
            utilisateur: userId,
            nom,
            imageCouverture,
            galerie,
            description,
            categorie,
            dateHeureDebut,
            dateHeureFin,
            localisation,
            typeEvenement,
            proposerMenu,
            photosMenu,
            visibilite
        });

        const evenementSauvegarde = await nouvelEvenement.save();
        res.status(201).json(evenementSauvegarde);

    } catch (error) {
        console.error("Erreur lors de la création de l'événement :", error);
        if (error.name === 'ValidationError') {
             // Mongoose validation error
             const errors = {};
             for (const field in error.errors) {
                  errors[field] = error.errors[field].message;
             }
             return res.status(400).json({ message: "Erreur de validation des données.", errors: errors });
        }
        res.status(500).json({ message: "Erreur lors de la création de l'événement", error: error.message }); // Include the error message
    }
};

// Fonction pour récupérer tous les événements
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        console.error("Erreur lors de la récupération des événements :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des événements", error: error.message }); // Include the error message
    }
};

// Fonction pour récupérer un événement par ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Événement non trouvé." });
        }
        res.status(200).json(event);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'événement :", error);
        if (error.name === 'CastError') {
             return res.status(400).json({ message: "ID d'événement invalide." });
        }
        res.status(500).json({ message: "Erreur lors de la récupération de l'événement", error: error.message }); // Include the error message
    }
};

// Fonction pour mettre à jour un événement par ID
exports.updateEvent = async (req, res) => {
    try {
        const userId = req.user.userId;
        const eventId = req.params.id;
       const {
            nom,
            imageCouverture,
            galerie,
            description,
            categorie,
            dateHeureDebut,
            dateHeureFin,
            localisation,
            typeEvenement,
            proposerMenu,
            photosMenu
        } = req.body;

         // Validation des données de l'événement
        if (nom === "" || categorie === "" || dateHeureDebut === "" || localisation === "" || typeEvenement === "") {
            return res.status(400).json({ message: "Tous les champs obligatoires doivent être fournis." });
        }

       if (typeEvenement && typeEvenement !== 'Gratuit' && typeEvenement !== 'Payant') {
            return res.status(400).json({ message: "Le type d'événement doit être 'Gratuit' ou 'Payant'." });
        }
        if (dateHeureDebut) {
             try {
                  new Date(dateHeureDebut).toISOString();
                } catch (error){
                   return res.status(400).json({ message: "Le champ dateHeureDebut doit être une date ISO valide." });
                }
        }
        if (dateHeureFin) {
              try {
                    new Date(dateHeureFin).toISOString();
                  } catch (error){
                     return res.status(400).json({ message: "Le champ dateHeureFin doit être une date ISO valide." });
                  }
        }

        // Vérifier si l'utilisateur est autorisé à modifier l'événement (par exemple, est-ce le créateur ?)
        const eventToUpdate = await Event.findById(eventId);
        if (!eventToUpdate) {
            return res.status(404).json({ message: "Événement non trouvé." });
        }
        if (eventToUpdate.utilisateur.toString() !== userId) {
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à modifier cet événement." });
        }

        // Mettre à jour l'événement
        const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body, { new: true, runValidators: true }); //ajout de runValidators
        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'événement :", error);
         if (error.name === 'ValidationError') {
              // Mongoose validation error
              const errors = {};
              for (const field in error.errors) {
                errors[field] = error.errors[field].message;
              }
               return res.status(400).json({ message: "Erreur de validation des données.", errors: errors });
         }
         if (error.name === 'CastError') {
             return res.status(400).json({ message: "ID d'événement invalide." });
        }
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'événement", error: error.message }); // Include the error message
    }
};

// Fonction pour supprimer un événement par ID
exports.deleteEvent = async (req, res) => {
    try {
        const userId = req.user.userId;
        const eventId = req.params.id;

        // Vérifier si l'utilisateur est autorisé à supprimer l'événement
        const eventToDelete = await Event.findById(eventId);
        if (!eventToDelete) {
            return res.status(404).json({ message: "Événement non trouvé." });
        }
        if (eventToDelete.utilisateur.toString() !== userId) {
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à supprimer cet événement." });
        }

        // Supprimer l'événement
        await Event.findByIdAndDelete(eventId);
        res.status(200).json({ message: "Événement supprimé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'événement :", error);
         if (error.name === 'CastError') {
             return res.status(400).json({ message: "ID d'événement invalide." });
        }
        res.status(500).json({ message: "Erreur lors de la suppression de l'événement", error: error.message }); // Include the error message
    }
};
