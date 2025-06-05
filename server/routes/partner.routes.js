const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partner.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const partnerMiddleware = require('../middlewares/partner.middleware');

// Routes publiques
router.get('/', partnerController.getAllPartners);
router.get('/:id', partnerController.getPartnerById);
router.get('/:id/events', partnerController.getPartnerEvents);

// Routes protégées (nécessitent une authentification)
router.post('/', authMiddleware, partnerController.createPartner);
router.put('/:id', authMiddleware, partnerMiddleware.isPartnerOrAdmin, partnerController.updatePartner);
router.delete('/:id', authMiddleware, partnerMiddleware.isAdmin, partnerController.deletePartner);
router.patch('/:id/verify', authMiddleware, partnerMiddleware.isAdmin, partnerController.verifyPartner);

module.exports = router; 