// --- middlewares/auth.middleware.js ---
const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token manquant ou invalide' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Vérifier que l'utilisateur existe toujours en base
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

    // Mettre à jour les informations de l'utilisateur dans la requête
    req.user = {
      ...decoded,
      _id: user._id,
      role: user.role || 'user',
      isAdminValidated: user.isAdminValidated || false,
      adminType: user.adminType,
      permissions: user.permissions || []
    };

    console.log("DECODED AUTH", req.user);
    next();
  } catch (err) {
    console.error('❌ AUTH ERROR:', err.message || err);
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expiré' });
    }
    return res.status(401).json({ message: 'Token invalide' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Non authentifié' });
  }

  if (req.user.role === 'user') {
    return res.status(403).json({ message: 'Accès réservé aux administrateurs' });
  }

  if (!req.user.isAdminValidated && req.user.adminType !== 'superadmin') {
    return res.status(403).json({ message: 'Compte administrateur non validé' });
  }

  next();
};

module.exports = {
  authMiddleware,
  adminMiddleware
};
