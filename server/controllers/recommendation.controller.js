const RecommendationService = require('../services/recommendation.service');
const { validationResult } = require('express-validator');

class RecommendationController {
    async getRecommendedEvents(req, res) {
        try {
            const userId = req.user.id; // Supposant que l'utilisateur est authentifié
            const recommendations = await RecommendationService.getRecommendedEvents(userId);
            
            res.status(200).json({
                success: true,
                data: recommendations
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des recommandations:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des recommandations',
                error: error.message
            });
        }
    }

    async updatePreferences(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const userId = req.user.id;
            const { eventId, interactionType } = req.body;

            const updatedPreferences = await RecommendationService.updateUserPreferences(
                userId,
                { eventId, interactionType }
            );

            res.status(200).json({
                success: true,
                data: updatedPreferences
            });
        } catch (error) {
            console.error('Erreur lors de la mise à jour des préférences:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour des préférences',
                error: error.message
            });
        }
    }
}

module.exports = new RecommendationController(); 