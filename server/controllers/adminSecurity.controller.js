// --- controllers/adminSecurity.controller.js ---
const LoginStatsService = require('../services/loginStats.service');
const { User } = require('../models/user.model');
const { AdminLogger, ACTION_TYPES } = require('../services/adminLogger.service');

class AdminSecurityController {
    // Obtenir les statistiques des tentatives de connexion échouées
    static async getFailedLoginStats(req, res) {
        try {
            const { startDate, endDate } = req.query;
            if (!startDate || !endDate) {
                return res.status(400).json({ message: "Les dates de début et de fin sont requises" });
            }

            const stats = await LoginStatsService.getFailedLoginStats(startDate, endDate);
            res.json(stats);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des statistiques" });
        }
    }

    // Obtenir la liste des comptes actuellement bloqués
    static async getLockedAccounts(req, res) {
        try {
            const lockedAccounts = await LoginStatsService.getCurrentlyLockedAccounts();
            res.json(lockedAccounts);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des comptes bloqués" });
        }
    }

    // Obtenir les statistiques par heure de la journée
    static async getLoginAttemptsByTime(req, res) {
        try {
            const { startDate, endDate } = req.query;
            if (!startDate || !endDate) {
                return res.status(400).json({ message: "Les dates de début et de fin sont requises" });
            }

            const stats = await LoginStatsService.getLoginAttemptsByTimeOfDay(startDate, endDate);
            res.json(stats);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des statistiques horaires" });
        }
    }

    // Débloquer manuellement un compte administrateur
    static async unlockAccount(req, res) {
        try {
            const { adminId } = req.params;
            const { reason } = req.body;

            if (!reason) {
                return res.status(400).json({ message: "Une raison est requise pour le déblocage manuel" });
            }

            const admin = await User.findById(adminId);
            if (!admin) {
                return res.status(404).json({ message: "Administrateur non trouvé" });
            }

            if (!admin.accountLocked) {
                return res.status(400).json({ message: "Ce compte n'est pas bloqué" });
            }

            // Réinitialiser le compte
            await admin.resetLoginAttempts();

            // Journaliser l'action
            await AdminLogger.logWithSecurity({
                adminId: req.user._id, // ID du super admin qui effectue l'action
                actionType: ACTION_TYPES.SECURITY_ACTION,
                action: 'Déblocage manuel de compte',
                targetId: adminId,
                details: {
                    reason,
                    previousLockCount: admin.lockCount,
                    previousLoginAttempts: admin.loginAttempts
                },
                status: 'success'
            });

            res.json({ 
                message: "Compte débloqué avec succès",
                admin: {
                    id: admin._id,
                    email: admin.email,
                    name: `${admin.firstName} ${admin.lastName}`
                }
            });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors du déblocage du compte" });
        }
    }
}

module.exports = AdminSecurityController; 