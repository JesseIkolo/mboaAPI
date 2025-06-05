// --- middlewares/adminValidation.middleware.js ---
const { User, PERMISSIONS, ADMIN_ROLES } = require('../models/user.model');

// Middleware pour vérifier si l'utilisateur est un admin validé
const isValidatedAdmin = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Non authentifié" });
        }

        // Utiliser les informations déjà présentes dans req.user
        if (req.user.role === 'user') {
            return res.status(403).json({ message: "Accès réservé aux administrateurs" });
        }

        if (!req.user.isAdminValidated && req.user.adminType !== ADMIN_ROLES.SUPERADMIN) {
            return res.status(403).json({ message: "Votre compte administrateur n'a pas encore été validé" });
        }

        next();
    } catch (error) {
        console.error('❌ ADMIN VALIDATION ERROR:', error.message || error);
        res.status(500).json({ message: "Erreur lors de la vérification des droits d'administrateur" });
    }
};

// Middleware pour vérifier si l'utilisateur est un super admin
const isSuperAdmin = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Non authentifié" });
        }

        if (req.user.adminType !== ADMIN_ROLES.SUPERADMIN) {
            return res.status(403).json({ message: "Accès réservé aux super administrateurs" });
        }

        next();
    } catch (error) {
        console.error('❌ SUPER ADMIN VALIDATION ERROR:', error.message || error);
        res.status(500).json({ message: "Erreur lors de la vérification des droits de super administrateur" });
    }
};

// Middleware pour vérifier les permissions spécifiques
const hasPermissions = (requiredPermissions) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({ message: "Non authentifié" });
            }

            if (req.user.role === 'user') {
                return res.status(403).json({ message: "Accès réservé aux administrateurs" });
            }

            if (!req.user.isAdminValidated && req.user.adminType !== ADMIN_ROLES.SUPERADMIN) {
                return res.status(403).json({ message: "Votre compte administrateur n'a pas encore été validé" });
            }

            // Si c'est un super admin, autoriser automatiquement
            if (req.user.adminType === ADMIN_ROLES.SUPERADMIN) {
                return next();
            }

            // Vérifier les permissions requises
            const hasAllPermissions = requiredPermissions.every(permission => 
                req.user.permissions && req.user.permissions.includes(permission)
            );

            if (!hasAllPermissions) {
                return res.status(403).json({ 
                    message: "Vous n'avez pas les permissions nécessaires pour cette action",
                    requiredPermissions,
                    yourPermissions: req.user.permissions || []
                });
            }

            next();
        } catch (error) {
            console.error('❌ PERMISSIONS VALIDATION ERROR:', error.message || error);
            res.status(500).json({ message: "Erreur lors de la vérification des permissions" });
        }
    };
};

module.exports = {
    isValidatedAdmin,
    isSuperAdmin,
    hasPermissions,
    PERMISSIONS
}; 