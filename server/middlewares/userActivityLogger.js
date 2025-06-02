// --- middlewares/userActivityLogger.js ---
const ActivityLog = require('../models/activityLog.model.js');

const logUserActivity = (action) => {
  return async (req, res, next) => {
    const actorId = req.user?.id || null;
    const actorRole = req.user?.role || 'inconnu';
    const targetId = req.params?.id || null;

    console.log(`[${new Date().toISOString()}] ACTION: ${action} | Par: ${actorId} (${actorRole}) | Cible: ${targetId}`);

    try {
      await ActivityLog.create({
        action,
        actorId,
        actorRole,
        targetId
      });
    } catch (err) {
      console.error('Erreur lors de l’enregistrement du log:', err.message);
    }

    next();
  };
};

module.exports = { logUserActivity };