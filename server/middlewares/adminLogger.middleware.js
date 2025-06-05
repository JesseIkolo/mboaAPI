// --- middlewares/adminLogger.middleware.js ---
const { AdminLogger } = require('../services/adminLogger.service');

/**
 * Middleware pour journaliser automatiquement les actions administratives
 * @param {string} actionType - Le type d'action (USER_MANAGEMENT, PERMISSION_UPDATE, etc.)
 * @param {string} actionDescription - Description de l'action (peut être une fonction qui reçoit req)
 * @param {function} getTargetId - Fonction optionnelle pour extraire l'ID de la cible de l'action
 */
const logAdminAction = (actionType, actionDescription, getTargetId = null) => {
    return async (req, res, next) => {
        // Sauvegarder la fonction send originale
        const originalSend = res.send;
        const originalJson = res.json;
        
        // Fonction pour journaliser l'action
        const logAction = async (status, errorMessage = null) => {
            try {
                const action = typeof actionDescription === 'function' 
                    ? actionDescription(req) 
                    : actionDescription;

                const targetId = getTargetId ? getTargetId(req) : null;

                await AdminLogger.logWithSecurity({
                    adminId: req.user._id,
                    actionType,
                    action,
                    targetId,
                    details: {
                        method: req.method,
                        path: req.path,
                        query: req.query,
                        body: req.body
                    },
                    ipAddress: req.ip,
                    userAgent: req.headers['user-agent'],
                    status,
                    errorMessage
                });
            } catch (error) {
                console.error('Erreur lors de la journalisation:', error);
            }
        };

        // Intercepter la réponse
        res.send = async function (body) {
            const status = res.statusCode >= 200 && res.statusCode < 400 ? 'success' : 'failure';
            await logAction(status, res.statusCode >= 400 ? body : null);
            return originalSend.apply(res, arguments);
        };

        res.json = async function (body) {
            const status = res.statusCode >= 200 && res.statusCode < 400 ? 'success' : 'failure';
            await logAction(status, res.statusCode >= 400 ? body.message || JSON.stringify(body) : null);
            return originalJson.apply(res, arguments);
        };

        // Gérer les erreurs
        const handleError = async (error) => {
            await logAction('failure', error.message || 'Une erreur est survenue');
            next(error);
        };

        // Exécuter le middleware suivant
        try {
            await next();
        } catch (error) {
            await handleError(error);
        }
    };
};

module.exports = {
    logAdminAction
}; 