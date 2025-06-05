// --- routes/adminSecurity.routes.js ---
const express = require('express');
const router = express.Router();
const AdminSecurityController = require('../controllers/adminSecurity.controller');
const { isAuthenticated } = require('../middlewares/auth.middleware');
const { isSuperAdmin } = require('../middlewares/admin.middleware');
const { logAdminAction } = require('../middlewares/adminLogger.middleware');
const { ACTION_TYPES } = require('../services/adminLogger.service');

// Toutes les routes nécessitent une authentification et des droits super admin
router.use(isAuthenticated, isSuperAdmin);

// Obtenir les statistiques des tentatives de connexion échouées
router.get('/stats/failed-logins',
    logAdminAction(
        ACTION_TYPES.SECURITY_ACTION,
        'Consultation des statistiques de connexions échouées'
    ),
    AdminSecurityController.getFailedLoginStats
);

// Obtenir les statistiques par heure
router.get('/stats/by-time',
    logAdminAction(
        ACTION_TYPES.SECURITY_ACTION,
        'Consultation des statistiques horaires de connexion'
    ),
    AdminSecurityController.getLoginAttemptsByTime
);

// Obtenir la liste des comptes bloqués
router.get('/locked-accounts',
    logAdminAction(
        ACTION_TYPES.SECURITY_ACTION,
        'Consultation des comptes bloqués'
    ),
    AdminSecurityController.getLockedAccounts
);

// Débloquer un compte administrateur
router.post('/unlock/:adminId',
    logAdminAction(
        ACTION_TYPES.SECURITY_ACTION,
        req => `Déblocage manuel du compte ${req.params.adminId}`,
        req => req.params.adminId
    ),
    AdminSecurityController.unlockAccount
);

module.exports = router; 