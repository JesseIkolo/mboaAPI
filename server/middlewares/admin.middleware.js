const { ADMIN_ROLES } = require('../models/user.model');

/**
 * Middleware pour vérifier si l'utilisateur est un Mboa Manager
 */
const isMboaManager = (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Non authentifié" });
        }

        if (req.user.adminType !== ADMIN_ROLES.MBOA_MANAGER && req.user.role !== 'admin') {
            return res.status(403).json({ message: "Accès non autorisé. Rôle Mboa Manager requis." });
        }

        next();
    } catch (error) {
        console.error("Erreur dans le middleware isMboaManager:", error);
        res.status(500).json({ message: "Erreur lors de la vérification des droits" });
    }
};

/**
 * Middleware pour vérifier si l'utilisateur est un gestionnaire de comptes
 */
const isAccountManager = (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Non authentifié" });
        }

        if (req.user.adminType !== ADMIN_ROLES.ACCOUNT_MANAGER && req.user.role !== 'admin') {
            return res.status(403).json({ message: "Accès non autorisé. Rôle Account Manager requis." });
        }

        next();
    } catch (error) {
        console.error("Erreur dans le middleware isAccountManager:", error);
        res.status(500).json({ message: "Erreur lors de la vérification des droits" });
    }
};

/**
 * Middleware pour vérifier si l'utilisateur est un gestionnaire de publicités
 */
const isAdsManager = (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Non authentifié" });
        }

        if (req.user.adminType !== ADMIN_ROLES.ADS_MANAGER && req.user.role !== 'admin') {
            return res.status(403).json({ message: "Accès non autorisé. Rôle Ads Manager requis." });
        }

        next();
    } catch (error) {
        console.error("Erreur dans le middleware isAdsManager:", error);
        res.status(500).json({ message: "Erreur lors de la vérification des droits" });
    }
};

module.exports = {
    isMboaManager,
    isAccountManager,
    isAdsManager
}; 