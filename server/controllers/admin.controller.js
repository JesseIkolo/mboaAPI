const { User, PERMISSIONS, ADMIN_ROLES, DEFAULT_PERMISSIONS } = require('../models/user.model');

// Obtenir la liste des administrateurs en attente de validation
const getPendingAdmins = async (req, res) => {
    try {
        const pendingAdmins = await User.find({
            role: { $ne: 'user' },
            isAdminValidated: false,
            adminType: { $ne: ADMIN_ROLES.SUPERADMIN }
        }).select('-password');

        res.json(pendingAdmins);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des administrateurs en attente" });
    }
};

// Valider un compte administrateur avec des permissions personnalisées
const validateAdmin = async (req, res) => {
    try {
        const { adminId } = req.params;
        const { customPermissions } = req.body;

        const admin = await User.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Administrateur non trouvé" });
        }

        if (admin.role === 'user') {
            return res.status(400).json({ message: "L'utilisateur n'est pas un administrateur" });
        }

        if (admin.adminType === ADMIN_ROLES.SUPERADMIN) {
            return res.status(400).json({ message: "Impossible de modifier les permissions d'un super administrateur" });
        }

        if (admin.isAdminValidated) {
            return res.status(400).json({ message: "L'administrateur est déjà validé" });
        }

        // Vérifier que les permissions personnalisées sont valides
        if (customPermissions) {
            const invalidPermissions = customPermissions.filter(
                permission => !Object.values(PERMISSIONS).includes(permission)
            );

            if (invalidPermissions.length > 0) {
                return res.status(400).json({
                    message: "Certaines permissions sont invalides",
                    invalidPermissions
                });
            }

            // Appliquer les permissions personnalisées
            admin.permissions = customPermissions;
        }

        admin.isAdminValidated = true;
        await admin.save();

        res.json({ 
            message: "Compte administrateur validé avec succès",
            admin: {
                ...admin.toObject(),
                password: undefined
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la validation de l'administrateur" });
    }
};

// Révoquer un administrateur
const revokeAdmin = async (req, res) => {
    try {
        const { adminId } = req.params;

        const admin = await User.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Administrateur non trouvé" });
        }

        if (admin.role === 'user') {
            return res.status(400).json({ message: "L'utilisateur n'est pas un administrateur" });
        }

        if (admin.adminType === ADMIN_ROLES.SUPERADMIN) {
            return res.status(400).json({ message: "Impossible de révoquer un super administrateur" });
        }

        admin.isAdminValidated = false;
        await admin.save();

        res.json({ message: "Accès administrateur révoqué avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la révocation de l'administrateur" });
    }
};

// Obtenir la liste de tous les administrateurs
const getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find({
            role: { $ne: 'user' }
        }).select('-password');

        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des administrateurs" });
    }
};

// Mettre à jour les permissions d'un administrateur
const updateAdminPermissions = async (req, res) => {
    try {
        const { adminId } = req.params;
        const { permissions } = req.body;

        const admin = await User.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Administrateur non trouvé" });
        }

        if (admin.role === 'user') {
            return res.status(400).json({ message: "L'utilisateur n'est pas un administrateur" });
        }

        if (admin.adminType === ADMIN_ROLES.SUPERADMIN) {
            return res.status(400).json({ message: "Impossible de modifier les permissions d'un super administrateur" });
        }

        // Vérifier que les permissions sont valides
        const invalidPermissions = permissions.filter(
            permission => !Object.values(PERMISSIONS).includes(permission)
        );

        if (invalidPermissions.length > 0) {
            return res.status(400).json({
                message: "Certaines permissions sont invalides",
                invalidPermissions
            });
        }

        admin.permissions = permissions;
        await admin.save();

        res.json({ 
            message: "Permissions mises à jour avec succès",
            admin: {
                ...admin.toObject(),
                password: undefined
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour des permissions" });
    }
};

// Obtenir la liste des permissions disponibles
const getAvailablePermissions = async (req, res) => {
    try {
        res.json({
            permissions: PERMISSIONS,
            adminRoles: ADMIN_ROLES,
            defaultPermissions: DEFAULT_PERMISSIONS
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des permissions disponibles" });
    }
};

module.exports = {
    getPendingAdmins,
    validateAdmin,
    revokeAdmin,
    getAllAdmins,
    updateAdminPermissions,
    getAvailablePermissions
}; 