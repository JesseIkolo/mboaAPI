// --- services/tokenBlacklist.service.js ---
const jwt = require('jsonwebtoken');

class TokenBlacklistService {
    constructor() {
        // Stockage en mémoire des tokens révoqués
        this.blacklistedTokens = new Map();
        
        // Nettoyage périodique des tokens expirés
        setInterval(() => {
            const now = Date.now();
            for (const [token, expiryTime] of this.blacklistedTokens.entries()) {
                if (now > expiryTime) {
                    this.blacklistedTokens.delete(token);
                }
            }
        }, 60 * 60 * 1000); // Nettoyage toutes les heures
    }

    // Ajouter un token à la liste noire
    async blacklistToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const expiryTime = decoded.exp * 1000; // Convertir en millisecondes
            this.blacklistedTokens.set(token, expiryTime);
            return true;
        } catch (error) {
            console.error('Erreur lors de la révocation du token:', error);
            return false;
        }
    }

    // Vérifier si un token est dans la liste noire
    isBlacklisted(token) {
        return this.blacklistedTokens.has(token);
    }

    // Révoquer tous les tokens d'un utilisateur
    async revokeAllUserTokens(userId) {
        try {
            // Créer un token de révocation avec l'ID utilisateur
            const revocationToken = jwt.sign(
                { 
                    userId,
                    type: 'revocation',
                    timestamp: Date.now()
                },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            // Stocker le token de révocation
            const decoded = jwt.verify(revocationToken, process.env.JWT_SECRET);
            this.blacklistedTokens.set(`user_${userId}`, decoded.exp * 1000);
            
            return true;
        } catch (error) {
            console.error('Erreur lors de la révocation des tokens:', error);
            return false;
        }
    }

    // Vérifier si les tokens d'un utilisateur ont été révoqués
    async isUserTokensRevoked(userId, tokenTimestamp) {
        const revocationTime = this.blacklistedTokens.get(`user_${userId}`);
        if (!revocationTime) return false;
        
        return tokenTimestamp < revocationTime;
    }
}

// Créer une instance unique du service
const tokenBlacklistService = new TokenBlacklistService();

module.exports = tokenBlacklistService; 