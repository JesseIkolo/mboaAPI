const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { authMiddleware } = require('../middlewares/auth.middleware');

const RecommendationController = require('../controllers/recommendation.controller');
const LoyaltyController = require('../controllers/loyalty.controller');
const AnalyticsController = require('../controllers/analytics.controller');
const ScheduleConflictController = require('../controllers/scheduleConflict.controller');
const ChatController = require('../controllers/chat.controller');

// Routes pour les recommandations
router.get('/recommendations', authMiddleware, RecommendationController.getRecommendedEvents);
router.post('/recommendations/preferences', [
    authMiddleware,
    check('eventId').isMongoId(),
    check('interactionType').isIn(['view', 'like', 'share', 'purchase', 'attend'])
], RecommendationController.updatePreferences);

// Routes pour le programme de fidélité
router.get('/loyalty/status', authMiddleware, LoyaltyController.getLoyaltyStatus);
router.post('/loyalty/points', [
    authMiddleware,
    check('amount').isNumeric(),
    check('reason').isIn(['event_purchase', 'event_attendance', 'referral', 'review', 'redemption']),
    check('eventId').optional().isMongoId()
], LoyaltyController.addPoints);
router.get('/loyalty/rewards', authMiddleware, LoyaltyController.getRewards);
router.post('/loyalty/rewards/:rewardId/use', authMiddleware, LoyaltyController.useReward);
router.post('/loyalty/referrals', [
    authMiddleware,
    check('referredUserId').isMongoId()
], LoyaltyController.addReferral);

// Routes pour les statistiques
router.get('/analytics/events/:eventId', [
    authMiddleware,
    check('eventId').isMongoId()
], AnalyticsController.getEventAnalytics);
router.get('/analytics/dashboard', authMiddleware, AnalyticsController.getBusinessOwnerDashboard);
router.post('/analytics/events/compare', [
    authMiddleware,
    check('eventIds').isArray(),
    check('eventIds.*').isMongoId()
], AnalyticsController.getEventComparison);
router.get('/analytics/events/:eventId/metrics', [
    authMiddleware,
    check('eventId').isMongoId()
], AnalyticsController.getPerformanceMetrics);
router.get('/analytics/events/:eventId/timeseries', [
    authMiddleware,
    check('eventId').isMongoId(),
    check('startDate').optional().isISO8601(),
    check('endDate').optional().isISO8601()
], AnalyticsController.getTimeSeriesAnalysis);

// Routes pour la gestion des conflits d'horaires
router.get('/schedule/conflicts/:eventId', [
    authMiddleware,
    check('eventId').isMongoId()
], ScheduleConflictController.checkConflicts);
router.get('/schedule/alternatives/:eventId', [
    authMiddleware,
    check('eventId').isMongoId()
], ScheduleConflictController.getAlternativeSlots);
router.get('/schedule/similar/:eventId', [
    authMiddleware,
    check('eventId').isMongoId()
], ScheduleConflictController.getSimilarEvents);
router.get('/schedule/venue/:venueId/availability', [
    authMiddleware,
    check('venueId').isMongoId(),
    check('startDate').isISO8601(),
    check('endDate').isISO8601()
], ScheduleConflictController.checkVenueAvailability);

// Routes pour le chat
router.post('/chat', [
    authMiddleware,
    check('participantIds').isArray(),
    check('participantIds.*').isMongoId(),
    check('type').isIn(['direct', 'group']),
    check('eventId').optional().isMongoId(),
    check('name').optional().isString()
], ChatController.createChat);
router.post('/chat/:chatId/messages', [
    authMiddleware,
    check('chatId').isMongoId(),
    check('content').isString().notEmpty(),
    check('attachments').optional().isArray()
], ChatController.sendMessage);
router.get('/chat', authMiddleware, ChatController.getChats);
router.get('/chat/:chatId/messages', [
    authMiddleware,
    check('chatId').isMongoId(),
    check('page').optional().isInt({ min: 1 }),
    check('limit').optional().isInt({ min: 1, max: 100 })
], ChatController.getChatMessages);
router.post('/chat/:chatId/participants', [
    authMiddleware,
    check('chatId').isMongoId(),
    check('participantIds').isArray(),
    check('participantIds.*').isMongoId()
], ChatController.addParticipants);
router.delete('/chat/:chatId/participants/:participantId', [
    authMiddleware,
    check('chatId').isMongoId(),
    check('participantId').isMongoId()
], ChatController.removeParticipant);
router.put('/chat/:chatId/settings', [
    authMiddleware,
    check('chatId').isMongoId(),
    check('notifications').optional().isBoolean(),
    check('muted').optional().isBoolean(),
    check('mutedUntil').optional().isISO8601()
], ChatController.updateChatSettings);
router.get('/chat/:chatId/search', [
    authMiddleware,
    check('chatId').isMongoId(),
    check('query').isString().notEmpty()
], ChatController.searchMessages);

module.exports = router; 