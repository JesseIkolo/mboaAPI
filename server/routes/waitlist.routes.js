// --- routes/waitlist.routes.js ---
const express = require('express');
const { addToWaitlist, getWaitlist } = require('../controllers/waitlist.controller.js');

const router = express.Router();

router.post('/', addToWaitlist);
router.get('/', getWaitlist);

module.exports = router;