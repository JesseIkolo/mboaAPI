const Partner = require('../models/partner.model');

// Middleware pour vérifier si l'utilisateur est un partenaire
exports.isPartner = async (req, res, next) => {
    try {
        const partner = await Partner.findOne({ userId: req.user.id });
        if (!partner || !partner.isVerified || partner.subscriptionStatus !== 'active') {
            return res.status(403).json({ 
                message: "Accès refusé. Vous devez être un partenaire vérifié avec un abonnement actif." 
            });
        }
        req.partner = partner;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Middleware pour vérifier si l'utilisateur est un admin
exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ 
                message: "Accès refusé. Vous devez être administrateur." 
            });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Middleware pour vérifier si l'utilisateur est le partenaire concerné ou un admin
exports.isPartnerOrAdmin = async (req, res, next) => {
    try {
        const partner = await Partner.findById(req.params.id);
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }

        if (req.user.role === 'admin' || partner.userId.toString() === req.user.id) {
            next();
        } else {
            res.status(403).json({ 
                message: "Accès refusé. Vous devez être le partenaire concerné ou un administrateur." 
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 