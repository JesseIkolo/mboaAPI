// --- services/adminLogger.service.js ---
const { AdminLog, ACTION_TYPES } = require('../models/adminLog.model');
const mongoose = require('mongoose');

class AdminLogger {
    static async log(params) {
        try {
            const {
                adminId,
                actionType,
                action,
                targetId,
                details,
                ipAddress,
                userAgent,
                status = 'success',
                errorMessage
            } = params;

            const log = new AdminLog({
                adminId,
                actionType,
                action,
                targetId,
                details,
                ipAddress,
                userAgent,
                status,
                errorMessage
            });

            await log.save();
            return log;
        } catch (error) {
            console.error('Erreur lors de la journalisation:', error);
            // En cas d'erreur de journalisation, on ne bloque pas le flux principal
            return null;
        }
    }

    static async getAdminLogs(filters = {}, page = 1, limit = 20) {
        try {
            const query = {};
            
            if (filters.adminId) query.adminId = filters.adminId;
            if (filters.actionType) query.actionType = filters.actionType;
            if (filters.status) query.status = filters.status;
            if (filters.startDate && filters.endDate) {
                query.createdAt = {
                    $gte: new Date(filters.startDate),
                    $lte: new Date(filters.endDate)
                };
            }

            const skip = (page - 1) * limit;

            const [logs, total] = await Promise.all([
                AdminLog.find(query)
                    .sort({ createdAt: -1 })
                    .skip(skip)
                    .limit(limit)
                    .populate('adminId', 'username firstName lastName')
                    .populate('targetId', 'username firstName lastName'),
                AdminLog.countDocuments(query)
            ]);

            return {
                logs,
                total,
                page,
                totalPages: Math.ceil(total / limit)
            };
        } catch (error) {
            console.error('Erreur lors de la récupération des logs:', error);
            throw error;
        }
    }

    static async getAdminStats(adminId, startDate, endDate) {
        try {
            const matchStage = {
                adminId: adminId,
                createdAt: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
            };

            const stats = await AdminLog.aggregate([
                { $match: matchStage },
                {
                    $group: {
                        _id: {
                            actionType: '$actionType',
                            status: '$status'
                        },
                        count: { $sum: 1 }
                    }
                },
                {
                    $group: {
                        _id: '$_id.actionType',
                        total: { $sum: '$count' },
                        success: {
                            $sum: {
                                $cond: [{ $eq: ['$_id.status', 'success'] }, '$count', 0]
                            }
                        },
                        failure: {
                            $sum: {
                                $cond: [{ $eq: ['$_id.status', 'failure'] }, '$count', 0]
                            }
                        }
                    }
                }
            ]);

            return stats;
        } catch (error) {
            console.error('Erreur lors de la récupération des statistiques:', error);
            throw error;
        }
    }

    static async getSystemActivity(startDate, endDate) {
        try {
            const matchStage = {
                createdAt: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
            };

            const activity = await AdminLog.aggregate([
                { $match: matchStage },
                {
                    $group: {
                        _id: {
                            date: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
                            actionType: '$actionType'
                        },
                        count: { $sum: 1 }
                    }
                },
                {
                    $group: {
                        _id: '$_id.date',
                        activities: {
                            $push: {
                                actionType: '$_id.actionType',
                                count: '$count'
                            }
                        },
                        totalActions: { $sum: '$count' }
                    }
                },
                { $sort: { _id: 1 } }
            ]);

            return activity;
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'activité système:', error);
            throw error;
        }
    }

    static async detectSecurityThreats(log) {
        const threats = [];

        // Vérifier les tentatives multiples d'actions sensibles
        const recentLogs = await AdminLog.find({
            adminId: log.adminId,
            actionType: log.actionType,
            createdAt: {
                $gte: new Date(Date.now() - 5 * 60 * 1000) // 5 dernières minutes
            }
        });

        if (recentLogs.length > 5) {
            threats.push({
                type: 'multiple_attempts',
                message: `Actions répétées détectées: ${recentLogs.length} tentatives en 5 minutes`,
                severity: 'warning'
            });
        }

        // Vérifier les actions en dehors des heures normales
        const hour = new Date().getHours();
        if (hour < 6 || hour > 22) {
            threats.push({
                type: 'unusual_time',
                message: 'Action effectuée en dehors des heures normales de travail',
                severity: 'info'
            });
        }

        // Vérifier les actions sensibles sur les super admins
        if (log.targetId) {
            const targetUser = await mongoose.model('User').findById(log.targetId);
            if (targetUser && targetUser.adminType === 'SUPERADMIN') {
                threats.push({
                    type: 'sensitive_target',
                    message: 'Action effectuée sur un compte super admin',
                    severity: 'high'
                });
            }
        }

        return threats;
    }

    static async notifySecurityThreats(threats, log) {
        if (threats.length === 0) return;

        // Enregistrer l'alerte dans les logs
        await AdminLogger.log({
            adminId: log.adminId,
            actionType: ACTION_TYPES.SECURITY_ACTION,
            action: 'Alerte de sécurité détectée',
            details: { threats },
            status: 'success'
        });

        // TODO: Implémenter la notification (email, SMS, etc.)
        console.log('Alertes de sécurité détectées:', threats);
    }

    static async logWithSecurity(params) {
        const log = await this.log(params);
        if (!log) return null;

        const threats = await this.detectSecurityThreats(log);
        if (threats.length > 0) {
            await this.notifySecurityThreats(threats, log);
        }

        return log;
    }
}

module.exports = {
    AdminLogger,
    ACTION_TYPES
}; 