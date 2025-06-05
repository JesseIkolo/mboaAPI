const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const partnerMiddleware = require('../middlewares/partner.middleware');

// Routes publiques
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);

// Routes protégées (admin uniquement)
router.post(
    '/',
    authMiddleware,
    partnerMiddleware.isAdmin,
    categoryController.createCategory
);

router.put(
    '/:id',
    authMiddleware,
    partnerMiddleware.isAdmin,
    categoryController.updateCategory
);

router.delete(
    '/:id',
    authMiddleware,
    partnerMiddleware.isAdmin,
    categoryController.deleteCategory
);

// Routes pour les sous-catégories
router.post(
    '/:id/subcategories',
    authMiddleware,
    partnerMiddleware.isAdmin,
    categoryController.addSubCategory
);

router.put(
    '/:id/subcategories/:subId',
    authMiddleware,
    partnerMiddleware.isAdmin,
    categoryController.updateSubCategory
);

router.delete(
    '/:id/subcategories/:subId',
    authMiddleware,
    partnerMiddleware.isAdmin,
    categoryController.deleteSubCategory
);

module.exports = router; 