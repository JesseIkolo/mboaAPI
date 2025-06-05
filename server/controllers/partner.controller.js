const Partner = require('../models/partner.model');
const User = require('../models/user.model');
const Event = require('../models/event.model');

// Créer un nouveau partenaire
exports.createPartner = async (req, res) => {
    try {
        const { userId, companyName, subscriptionType } = req.body;

        // Vérifier si l'utilisateur existe
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        // Vérifier si l'utilisateur est déjà partenaire
        const existingPartner = await Partner.findOne({ userId });
        if (existingPartner) {
            return res.status(400).json({ message: "Cet utilisateur est déjà partenaire" });
        }

        // Calculer les dates d'abonnement
        const startDate = new Date();
        const endDate = new Date();
        if (subscriptionType === 'monthly') {
            endDate.setMonth(endDate.getMonth() + 1);
        } else {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        const partner = new Partner({
            userId,
            companyName,
            subscriptionType,
            subscriptionStartDate: startDate,
            subscriptionEndDate: endDate
        });

        await partner.save();
        res.status(201).json(partner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir tous les partenaires
exports.getAllPartners = async (req, res) => {
    try {
        const partners = await Partner.find().populate('userId', 'name email');
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir un partenaire par ID
exports.getPartnerById = async (req, res) => {
    try {
        const partner = await Partner.findById(req.params.id).populate('userId', 'name email');
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }
        res.status(200).json(partner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour un partenaire
exports.updatePartner = async (req, res) => {
    try {
        const partner = await Partner.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }
        res.status(200).json(partner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un partenaire
exports.deletePartner = async (req, res) => {
    try {
        const partner = await Partner.findByIdAndDelete(req.params.id);
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }
        res.status(200).json({ message: "Partenaire supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Vérifier le statut de partenaire
exports.verifyPartner = async (req, res) => {
    try {
        const partner = await Partner.findById(req.params.id);
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }

        partner.isVerified = true;
        await partner.save();
        res.status(200).json({ message: "Partenaire vérifié avec succès", partner });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir les événements d'un partenaire
exports.getPartnerEvents = async (req, res) => {
    try {
        const partner = await Partner.findById(req.params.id);
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }

        const events = await Event.find({ 
            createdBy: partner.userId,
            isPublic: true
        });
        
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 