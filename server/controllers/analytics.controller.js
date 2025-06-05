const AnalyticsService = require('../services/analytics.service');
const { validationResult } = require('express-validator');

class AnalyticsController {
    async getEventAnalytics(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const { eventId } = req.params;
            const analytics = await AnalyticsService.getEventAnalytics(eventId);

            res.status(200).json({
                success: true,
                data: analytics
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des analytics:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des analytics',
                error: error.message
            });
        }
    }

    async getBusinessOwnerDashboard(req, res) {
        try {
            const businessOwnerId = req.user.id;
            const dashboard = await AnalyticsService.getBusinessOwnerDashboard(businessOwnerId);

            res.status(200).json({
                success: true,
                data: dashboard
            });
        } catch (error) {
            console.error('Erreur lors de la récupération du dashboard:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération du dashboard',
                error: error.message
            });
        }
    }

    async getEventComparison(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const { eventIds } = req.body;
            const comparisons = await Promise.all(
                eventIds.map(eventId => AnalyticsService.getEventAnalytics(eventId))
            );

            res.status(200).json({
                success: true,
                data: comparisons
            });
        } catch (error) {
            console.error('Erreur lors de la comparaison des événements:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la comparaison des événements',
                error: error.message
            });
        }
    }

    async getPerformanceMetrics(req, res) {
        try {
            const { eventId } = req.params;
            const analytics = await AnalyticsService.getEventAnalytics(eventId);

            const metrics = {
                roi: analytics.performanceMetrics.roi,
                efficiency: analytics.performanceMetrics.efficiency,
                salesPerformance: {
                    totalRevenue: analytics.salesStats.reduce((acc, curr) => acc + curr.totalSales, 0),
                    averageTicketPrice: analytics.salesStats.reduce((acc, curr) => acc + curr.averagePrice, 0) / analytics.salesStats.length,
                    ticketsSold: analytics.salesStats.reduce((acc, curr) => acc + curr.ticketsSold, 0)
                },
                engagement: analytics.engagementStats,
                demographics: analytics.demographicStats
            };

            res.status(200).json({
                success: true,
                data: metrics
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des métriques:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des métriques',
                error: error.message
            });
        }
    }

    async getTimeSeriesAnalysis(req, res) {
        try {
            const { eventId } = req.params;
            const { startDate, endDate } = req.query;
            const analytics = await AnalyticsService.getEventAnalytics(eventId);

            let timeSeriesData = analytics.timeSeriesData;
            if (startDate && endDate) {
                timeSeriesData = timeSeriesData.filter(data => {
                    const date = new Date(data._id.year, data._id.month - 1, data._id.day);
                    return date >= new Date(startDate) && date <= new Date(endDate);
                });
            }

            res.status(200).json({
                success: true,
                data: timeSeriesData
            });
        } catch (error) {
            console.error('Erreur lors de l\'analyse temporelle:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'analyse temporelle',
                error: error.message
            });
        }
    }
}

module.exports = new AnalyticsController(); 