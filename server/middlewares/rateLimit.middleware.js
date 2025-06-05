const rateLimit = require('express-rate-limit');

// Stockage en mémoire des tentatives par IP
const ipAttempts = new Map();

// Fonction pour nettoyer périodiquement le stockage
setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of ipAttempts.entries()) {
        if (now - data.lastAttempt > 24 * 60 * 60 * 1000) { // 24 heures
            ipAttempts.delete(ip);
        }
    }
}, 60 * 60 * 1000); // Nettoyage toutes les heures

// Middleware de détection d'attaques distribuées
const detectDistributedAttacks = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    
    if (!ipAttempts.has(ip)) {
        ipAttempts.set(ip, {
            attempts: 1,
            firstAttempt: now,
            lastAttempt: now,
            blocked: false
        });
    } else {
        const data = ipAttempts.get(ip);
        
        // Si l'IP est bloquée, vérifier si la période de blocage est terminée
        if (data.blocked) {
            const blockDuration = Math.min(24 * 60 * 60 * 1000, Math.pow(2, data.blockCount || 1) * 60 * 1000);
            if (now - data.lastAttempt < blockDuration) {
                return res.status(429).json({
                    error: 'Trop de tentatives. Réessayez plus tard.',
                    retryAfter: Math.ceil((data.lastAttempt + blockDuration - now) / 1000)
                });
            }
            // Réinitialiser si la période de blocage est terminée
            data.blocked = false;
            data.attempts = 0;
        }

        // Mettre à jour les tentatives
        data.attempts++;
        data.lastAttempt = now;

        // Détecter les motifs d'attaque
        const timeWindow = now - data.firstAttempt;
        const attemptsPerSecond = data.attempts / (timeWindow / 1000);

        // Bloquer si trop de tentatives par seconde
        if (attemptsPerSecond > 10) { // Plus de 10 tentatives par seconde
            data.blocked = true;
            data.blockCount = (data.blockCount || 0) + 1;
            return res.status(429).json({
                error: 'Activité suspecte détectée. Compte temporairement bloqué.',
                retryAfter: Math.pow(2, data.blockCount) * 60 // Blocage progressif en minutes
            });
        }

        ipAttempts.set(ip, data);
    }

    next();
};

// Rate limiter pour les routes d'authentification
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 tentatives par fenêtre
    message: 'Trop de tentatives de connexion. Réessayez dans 15 minutes.',
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true, // Ne pas compter les requêtes réussies
    keyGenerator: (req) => {
        // Utiliser une combinaison d'IP et d'email pour le rate limiting
        return `${req.ip}-${req.body.email}`;
    }
});

// Rate limiter pour les routes d'API générales
const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100, // 100 requêtes par minute
    message: 'Trop de requêtes. Veuillez réessayer plus tard.',
    standardHeaders: true,
    legacyHeaders: false
});

// Rate limiter spécifique pour les actions sensibles
const sensitiveActionLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 heure
    max: 10, // 10 tentatives par heure
    message: 'Trop de tentatives pour cette action sensible. Réessayez dans 1 heure.',
    standardHeaders: true,
    legacyHeaders: false
});

module.exports = {
    detectDistributedAttacks,
    authLimiter,
    apiLimiter,
    sensitiveActionLimiter
}; 