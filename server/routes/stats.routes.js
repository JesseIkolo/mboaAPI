const express = require('express');
const { getDashboardStats } = require('../controllers/stats.controller');
const { authMiddleware, adminMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/dashboard', authMiddleware, adminMiddleware, getDashboardStats);

module.exports = router; 