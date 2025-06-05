const Partner = require('../models/partner.model');
const User = require('../models/user.model');

// Ajouter un Business Manager
exports.addBusinessManager = async (req, res) => {
    try {
        const partnerId = req.params.partnerId;
        const { userId, permissions } = req.body;

        const partner = await Partner.findById(partnerId);
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }

        // Vérifier la limite des Business Managers pour Mboa Plus
        if (partner.subscriptionType === 'mboaPlus' && partner.businessManagers.length >= 3) {
            return res.status(400).json({ 
                message: "Limite de Business Managers atteinte pour le plan Mboa Plus. Passez au plan Premium pour ajouter plus de managers." 
            });
        }

        // Vérifier si l'utilisateur existe
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        // Vérifier si l'utilisateur est déjà Business Manager
        const isExistingManager = partner.businessManagers.some(
            manager => manager.userId.toString() === userId
        );
        if (isExistingManager) {
            return res.status(400).json({ message: "Cet utilisateur est déjà Business Manager" });
        }

        // Ajouter le nouveau Business Manager
        partner.businessManagers.push({
            userId,
            permissions: {
                canCreateEvent: permissions.canCreateEvent || false,
                canDeleteEvent: permissions.canDeleteEvent || false,
                canAddManager: permissions.canAddManager || false,
                canDeleteManager: permissions.canDeleteManager || false,
                canEditCompanyProfile: permissions.canEditCompanyProfile || false,
                canManageMessages: permissions.canManageMessages || false,
                canContactSupport: permissions.canContactSupport || false,
                canViewTransactions: permissions.canViewTransactions || false,
                canRenewSubscription: permissions.canRenewSubscription || false,
                canViewStatistics: permissions.canViewStatistics || false
            }
        });

        await partner.save();
        res.status(201).json(partner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir tous les Business Managers d'un partenaire
exports.getBusinessManagers = async (req, res) => {
    try {
        const partnerId = req.params.partnerId;
        const partner = await Partner.findById(partnerId)
            .populate('businessManagers.userId', 'name email');

        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }

        res.status(200).json(partner.businessManagers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour les permissions d'un Business Manager
exports.updateBusinessManagerPermissions = async (req, res) => {
    try {
        const { partnerId, managerId } = req.params;
        const { permissions } = req.body;

        const partner = await Partner.findById(partnerId);
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }

        const managerIndex = partner.businessManagers.findIndex(
            manager => manager._id.toString() === managerId
        );

        if (managerIndex === -1) {
            return res.status(404).json({ message: "Business Manager non trouvé" });
        }

        // Mettre à jour les permissions
        partner.businessManagers[managerIndex].permissions = {
            ...partner.businessManagers[managerIndex].permissions,
            ...permissions
        };

        await partner.save();
        res.status(200).json(partner.businessManagers[managerIndex]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un Business Manager
exports.removeBusinessManager = async (req, res) => {
    try {
        const { partnerId, managerId } = req.params;

        const partner = await Partner.findById(partnerId);
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }

        partner.businessManagers = partner.businessManagers.filter(
            manager => manager._id.toString() !== managerId
        );

        await partner.save();
        res.status(200).json({ message: "Business Manager supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 