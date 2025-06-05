// --- services/loginStats.service.js ---
const { AdminLog } = require('../models/adminLog.model');
const { User } = require('../models/user.model');

class LoginStatsService {
    static async getFailedLoginStats(startDate, endDate) {
        try {
            const stats = await AdminLog.aggregate([
                {
                    $match: {
                        actionType: 'security_action',
                        action: { $regex: /connexion échouée|Compte bloqué/i },
                        createdAt: {
                            $gte: new Date(startDate),
                            $lte: new Date(endDate)
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            adminId: '$adminId',
                            date: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }
                        },
                        attempts: { $sum: 1 },
                        lastAttempt: { $max: '$createdAt' }
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: '_id.adminId',
                        foreignField: '_id',
                        as: 'adminInfo'
                    }
                },
                {
                    $unwind: '$adminInfo'
                },
                {
                    $project: {
                        date: '$_id.date',
                        adminId: '$_id.adminId',
                        adminEmail: '$adminInfo.email',
                        adminName: { 
                            $concat: ['$adminInfo.firstName', ' ', '$adminInfo.lastName'] 
                        },
                        attempts: 1,
                        lastAttempt: 1,
                        isCurrentlyLocked: '$adminInfo.accountLocked'
                    }
                },
                {
                    $sort: { lastAttempt: -1 }
                }
            ]);

            return stats;
        } catch (error) {
            console.error('Erreur lors de la récupération des statistiques:', error);
            throw error;
        }
    }

    static async getCurrentlyLockedAccounts() {
        try {
            const lockedAccounts = await User.find({
                accountLocked: true,
                lockUntil: { $gt: new Date() }
            }).select('email firstName lastName loginAttempts lockCount lockUntil adminType');

            return lockedAccounts.map(account => ({
                id: account._id,
                email: account.email,
                name: `${account.firstName} ${account.lastName}`,
                adminType: account.adminType,
                attempts: account.loginAttempts,
                lockCount: account.lockCount,
                remainingTime: Math.ceil((account.lockUntil - Date.now()) / (60 * 1000)) // en minutes
            }));
        } catch (error) {
            console.error('Erreur lors de la récupération des comptes bloqués:', error);
            throw error;
        }
    }

    static async getLoginAttemptsByTimeOfDay(startDate, endDate) {
        try {
            const stats = await AdminLog.aggregate([
                {
                    $match: {
                        actionType: 'security_action',
                        createdAt: {
                            $gte: new Date(startDate),
                            $lte: new Date(endDate)
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            hour: { $hour: '$createdAt' },
                            status: '$status'
                        },
                        count: { $sum: 1 }
                    }
                },
                {
                    $group: {
                        _id: '$_id.hour',
                        attempts: {
                            $push: {
                                status: '$_id.status',
                                count: '$count'
                            }
                        }
                    }
                },
                {
                    $sort: { '_id': 1 }
                }
            ]);

            return stats;
        } catch (error) {
            console.error('Erreur lors de la récupération des statistiques horaires:', error);
            throw error;
        }
    }
}

module.exports = LoginStatsService; 