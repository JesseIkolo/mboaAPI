// --- routes/adminLog.routes.js ---
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth.middleware');
const { isSuperAdmin, isValidatedAdmin, hasPermissions } = require('../middlewares/adminValidation.middleware');
const { PERMISSIONS } = require('../models/user.model');
const {
    getLogs,
    getAdminStats,
    getSystemActivity,
    getActionTypes,
    exportLogs
} = require('../controllers/adminLog.controller');
const { logAdminAction } = require('../middlewares/adminLogger.middleware');
const { ACTION_TYPES } = require('../services/adminLogger.service');

// Routes protégées par authentification
router.use(authMiddleware);

// Routes pour la consultation des logs
router.get('/logs',
    isValidatedAdmin,
    hasPermissions([PERMISSIONS.MANAGE_USERS]),
    logAdminAction(ACTION_TYPES.SYSTEM_SETTINGS, 'Consultation des logs administratifs'),
    getLogs
);

router.get('/action-types',
    isValidatedAdmin,
    logAdminAction(ACTION_TYPES.SYSTEM_SETTINGS, 'Consultation des types d\'actions'),
    getActionTypes
);

router.get('/admin/:adminId/stats',
    isValidatedAdmin,
    hasPermissions([PERMISSIONS.VALIDATE_ADMINS]),
    logAdminAction(
        ACTION_TYPES.SYSTEM_SETTINGS,
        req => `Consultation des statistiques de l'administrateur ${req.params.adminId}`
    ),
    getAdminStats
);

// Routes réservées aux super admins
router.get('/system-activity',
    isSuperAdmin,
    logAdminAction(ACTION_TYPES.SYSTEM_SETTINGS, 'Consultation de l\'activité système'),
    getSystemActivity
);

router.get('/export',
    isSuperAdmin,
    logAdminAction(ACTION_TYPES.SYSTEM_SETTINGS, 'Export des logs administratifs'),
    exportLogs
);

module.exports = router; 