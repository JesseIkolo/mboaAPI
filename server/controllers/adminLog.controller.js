// --- controllers/adminLog.controller.js ---
const { AdminLogger, ACTION_TYPES } = require('../services/adminLogger.service');

// Récupérer les logs avec pagination et filtres
const getLogs = async (req, res) => {
    try {
        const { page = 1, limit = 20, ...filters } = req.query;
        const logs = await AdminLogger.getAdminLogs(filters, parseInt(page), parseInt(limit));
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des logs" });
    }
};

// Récupérer les statistiques d'un administrateur
const getAdminStats = async (req, res) => {
    try {
        const { adminId } = req.params;
        const { startDate, endDate } = req.query;

        if (!startDate || !endDate) {
            return res.status(400).json({ message: "Les dates de début et de fin sont requises" });
        }

        const stats = await AdminLogger.getAdminStats(adminId, startDate, endDate);
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des statistiques" });
    }
};

// Récupérer l'activité système globale
const getSystemActivity = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;

        if (!startDate || !endDate) {
            return res.status(400).json({ message: "Les dates de début et de fin sont requises" });
        }

        const activity = await AdminLogger.getSystemActivity(startDate, endDate);
        res.json(activity);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'activité système" });
    }
};

// Récupérer les types d'actions disponibles
const getActionTypes = async (req, res) => {
    try {
        res.json(ACTION_TYPES);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des types d'actions" });
    }
};

// Exporter les logs (format CSV)
const exportLogs = async (req, res) => {
    try {
        const { startDate, endDate, ...filters } = req.query;
        
        if (!startDate || !endDate) {
            return res.status(400).json({ message: "Les dates de début et de fin sont requises" });
        }

        filters.startDate = startDate;
        filters.endDate = endDate;

        const { logs } = await AdminLogger.getAdminLogs(filters);

        // Convertir les logs en format CSV
        const fields = ['Date', 'Admin', 'Action', 'Type', 'Statut', 'Détails'];
        const csv = [fields.join(',')];

        logs.forEach(log => {
            const row = [
                new Date(log.createdAt).toISOString(),
                `${log.adminId.firstName} ${log.adminId.lastName}`,
                log.action,
                log.actionType,
                log.status,
                JSON.stringify(log.details).replace(/,/g, ';') // Éviter les conflits avec les séparateurs CSV
            ];
            csv.push(row.join(','));
        });

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename=admin_logs_${startDate}_${endDate}.csv`);
        res.send(csv.join('\n'));
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'exportation des logs" });
    }
};

module.exports = {
    getLogs,
    getAdminStats,
    getSystemActivity,
    getActionTypes,
    exportLogs
}; 