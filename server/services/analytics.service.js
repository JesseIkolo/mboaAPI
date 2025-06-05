const Event = require('../models/event.model');
const User = require('../models/user.model');
const Transaction = require('../models/transaction.model');
const mongoose = require('mongoose');

class AnalyticsService {
    async getEventAnalytics(eventId) {
        try {
            const event = await Event.findById(eventId);
            if (!event) {
                throw new Error('Événement non trouvé');
            }

            // Statistiques des ventes
            const salesStats = await Transaction.aggregate([
                {
                    $match: {
                        eventId: mongoose.Types.ObjectId(eventId),
                        status: 'completed'
                    }
                },
                {
                    $group: {
                        _id: '$ticketType',
                        totalSales: { $sum: '$amount' },
                        ticketsSold: { $sum: 1 },
                        averagePrice: { $avg: '$amount' }
                    }
                }
            ]);

            // Statistiques démographiques
            const demographicStats = await User.aggregate([
                {
                    $match: {
                        _id: { $in: event.attendees }
                    }
                },
                {
                    $group: {
                        _id: null,
                        ageGroups: {
                            $push: {
                                $switch: {
                                    branches: [
                                        { case: { $lt: ['$age', 18] }, then: '<18' },
                                        { case: { $lt: ['$age', 25] }, then: '18-24' },
                                        { case: { $lt: ['$age', 35] }, then: '25-34' },
                                        { case: { $lt: ['$age', 45] }, then: '35-44' },
                                        { case: { $lt: ['$age', 55] }, then: '45-54' }
                                    ],
                                    default: '55+'
                                }
                            }
                        },
                        genderDistribution: {
                            $push: '$gender'
                        },
                        locationDistribution: {
                            $push: '$city'
                        }
                    }
                }
            ]);

            // Statistiques d'engagement
            const engagementStats = {
                views: event.views || 0,
                shares: event.shares || 0,
                likes: event.likes || 0,
                comments: event.comments ? event.comments.length : 0,
                registrationRate: event.attendees.length / event.views || 0,
                conversionRate: salesStats.reduce((acc, curr) => acc + curr.ticketsSold, 0) / event.views || 0
            };

            // Analyse temporelle
            const timeSeriesData = await Transaction.aggregate([
                {
                    $match: {
                        eventId: mongoose.Types.ObjectId(eventId),
                        status: 'completed'
                    }
                },
                {
                    $group: {
                        _id: {
                            year: { $year: '$createdAt' },
                            month: { $month: '$createdAt' },
                            day: { $dayOfMonth: '$createdAt' }
                        },
                        sales: { $sum: '$amount' },
                        tickets: { $sum: 1 }
                    }
                },
                {
                    $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 }
                }
            ]);

            // Analyse comparative
            const comparativeStats = await Event.aggregate([
                {
                    $match: {
                        category: event.category,
                        _id: { $ne: mongoose.Types.ObjectId(eventId) },
                        startDate: {
                            $gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) // 90 derniers jours
                        }
                    }
                },
                {
                    $group: {
                        _id: null,
                        avgTicketPrice: { $avg: '$ticketTypes.price' },
                        avgAttendees: { $avg: { $size: '$attendees' } },
                        avgViews: { $avg: '$views' }
                    }
                }
            ]);

            return {
                eventInfo: {
                    name: event.name,
                    date: event.startDate,
                    category: event.category
                },
                salesStats,
                demographicStats: demographicStats[0] || {},
                engagementStats,
                timeSeriesData,
                comparativeStats: comparativeStats[0] || {},
                performanceMetrics: {
                    roi: this.calculateROI(event, salesStats),
                    efficiency: this.calculateEfficiencyScore(event, engagementStats)
                }
            };
        } catch (error) {
            console.error('Erreur lors de la génération des analytics:', error);
            throw error;
        }
    }

    calculateROI(event, salesStats) {
        const totalRevenue = salesStats.reduce((acc, curr) => acc + curr.totalSales, 0);
        const totalCosts = event.costs ? event.costs.reduce((acc, curr) => acc + curr.amount, 0) : 0;
        return totalCosts > 0 ? ((totalRevenue - totalCosts) / totalCosts) * 100 : 0;
    }

    calculateEfficiencyScore(event, engagementStats) {
        const weights = {
            views: 0.1,
            shares: 0.2,
            likes: 0.15,
            comments: 0.15,
            registrationRate: 0.2,
            conversionRate: 0.2
        };

        return Object.keys(weights).reduce((score, metric) => {
            return score + (engagementStats[metric] * weights[metric]);
        }, 0);
    }

    async getBusinessOwnerDashboard(businessOwnerId) {
        try {
            const events = await Event.find({ createdBy: businessOwnerId });
            const eventIds = events.map(event => event._id);

            // Statistiques globales
            const globalStats = await Transaction.aggregate([
                {
                    $match: {
                        eventId: { $in: eventIds },
                        status: 'completed'
                    }
                },
                {
                    $group: {
                        _id: null,
                        totalRevenue: { $sum: '$amount' },
                        totalTickets: { $sum: 1 },
                        averageTicketPrice: { $avg: '$amount' }
                    }
                }
            ]);

            // Tendances mensuelles
            const monthlyTrends = await Transaction.aggregate([
                {
                    $match: {
                        eventId: { $in: eventIds },
                        status: 'completed'
                    }
                },
                {
                    $group: {
                        _id: {
                            year: { $year: '$createdAt' },
                            month: { $month: '$createdAt' }
                        },
                        revenue: { $sum: '$amount' },
                        tickets: { $sum: 1 }
                    }
                },
                {
                    $sort: { '_id.year': 1, '_id.month': 1 }
                }
            ]);

            return {
                globalStats: globalStats[0] || {},
                monthlyTrends,
                eventPerformance: await Promise.all(
                    events.map(event => this.getEventAnalytics(event._id))
                )
            };
        } catch (error) {
            console.error('Erreur lors de la génération du dashboard:', error);
            throw error;
        }
    }
}

module.exports = new AnalyticsService(); 