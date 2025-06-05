// --- routes/admin.routes.js ---
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { isSuperAdmin, hasPermissions, isValidatedAdmin } = require('../middlewares/adminValidation.middleware');
const { PERMISSIONS } = require('../models/user.model');
const { logAdminAction } = require('../middlewares/adminLogger.middleware');
const { ACTION_TYPES } = require('../services/adminLogger.service');

// Routes protégées par authentification
router.use(authMiddleware);

// Routes pour la gestion des administrateurs
router.get('/pending', 
    isSuperAdmin,
    logAdminAction(ACTION_TYPES.ADMIN_VALIDATION, 'Consultation des administrateurs en attente'),
    adminController.getPendingAdmins
);

router.get('/all', 
    isValidatedAdmin,
    hasPermissions([PERMISSIONS.VALIDATE_ADMINS]),
    logAdminAction(ACTION_TYPES.ADMIN_VALIDATION, 'Consultation de tous les administrateurs'),
    adminController.getAllAdmins
);

router.put('/validate/:adminId',
    isSuperAdmin,
    logAdminAction(
        ACTION_TYPES.ADMIN_VALIDATION,
        req => `Validation de l'administrateur ${req.params.adminId}`,
        req => req.params.adminId
    ),
    adminController.validateAdmin
);

router.put('/revoke/:adminId',
    isSuperAdmin,
    logAdminAction(
        ACTION_TYPES.ADMIN_REVOCATION,
        req => `Révocation de l'administrateur ${req.params.adminId}`,
        req => req.params.adminId
    ),
    adminController.revokeAdmin
);

router.put('/permissions/:adminId',
    isSuperAdmin,
    logAdminAction(
        ACTION_TYPES.PERMISSION_UPDATE,
        req => `Mise à jour des permissions de l'administrateur ${req.params.adminId}`,
        req => req.params.adminId
    ),
    adminController.updateAdminPermissions
);

router.get('/permissions',
    isValidatedAdmin,
    logAdminAction(ACTION_TYPES.SYSTEM_SETTINGS, 'Consultation des permissions disponibles'),
    adminController.getAvailablePermissions
);

// Routes pour la gestion des partenaires
router.post('/validate-partner/:partnerId',
    isValidatedAdmin,
    hasPermissions([PERMISSIONS.MANAGE_PARTNERS]),
    logAdminAction(
        ACTION_TYPES.PARTNER_VALIDATION,
        req => `Validation du partenaire ${req.params.partnerId}`,
        req => req.params.partnerId
    ),
    async (req, res) => {
        try {
            // Logique de validation du partenaire
            res.json({ message: 'Partenaire validé avec succès' });
        } catch (error) {
            console.error('❌ PARTNER VALIDATION ERROR:', error.message || error);
            res.status(500).json({ message: 'Erreur lors de la validation du partenaire' });
        }
    }
);

// Routes pour la gestion des utilisateurs
router.post('/manage-users/:action',
    isValidatedAdmin,
    hasPermissions([PERMISSIONS.MANAGE_USERS]),
    logAdminAction(
        ACTION_TYPES.USER_MANAGEMENT,
        req => `Action ${req.params.action} sur les utilisateurs`,
        req => req.body.targetId
    ),
    async (req, res) => {
        try {
            // Logique de gestion des utilisateurs
            res.json({ message: 'Action effectuée avec succès' });
        } catch (error) {
            console.error('❌ USER MANAGEMENT ERROR:', error.message || error);
            res.status(500).json({ message: 'Erreur lors du traitement de la requête' });
        }
    }
);

module.exports = router; 