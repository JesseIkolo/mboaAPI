const express = require('express');
const router = express.Router();
const businessManagerController = require('../controllers/businessManager.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const partnerMiddleware = require('../middlewares/partner.middleware');

// Routes pour la gestion des Business Managers
router.get(
    '/partner/:partnerId/managers',
    authMiddleware,
    partnerMiddleware.isPartnerOrAdmin,
    businessManagerController.getBusinessManagers
);

router.post(
    '/partner/:partnerId/managers',
    authMiddleware,
    partnerMiddleware.isPartnerOrAdmin,
    businessManagerController.addBusinessManager
);

router.put(
    '/partner/:partnerId/managers/:managerId',
    authMiddleware,
    partnerMiddleware.isPartnerOrAdmin,
    businessManagerController.updateBusinessManagerPermissions
);

router.delete(
    '/partner/:partnerId/managers/:managerId',
    authMiddleware,
    partnerMiddleware.isPartnerOrAdmin,
    businessManagerController.removeBusinessManager
);

module.exports = router; 