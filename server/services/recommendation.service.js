const Event = require('../models/event.model');
const UserPreference = require('../models/userPreference.model');

class RecommendationService {
    async getRecommendedEvents(userId) {
        try {
            const userPreference = await UserPreference.findOne({ userId }).populate('categories.category');
            if (!userPreference) {
                return [];
            }

            // Construire la requête de base
            let query = {
                status: 'published',
                startDate: { $gt: new Date() }
            };

            // Filtrer par catégories préférées
            if (userPreference.categories.length > 0) {
                query.category = {
                    $in: userPreference.categories.map(c => c.category._id)
                };
            }

            // Filtrer par plage de prix
            query['ticketTypes.price'] = {
                $gte: userPreference.priceRange.min,
                $lte: userPreference.priceRange.max
            };

            // Obtenir les événements de base
            let events = await Event.find(query)
                .populate('category')
                .populate('createdBy', 'name')
                .sort({ startDate: 1 });

            // Calculer les scores de recommandation
            const scoredEvents = events.map(event => {
                let score = 0;

                // Score basé sur les catégories préférées
                const categoryPreference = userPreference.categories.find(
                    c => c.category._id.toString() === event.category._id.toString()
                );
                if (categoryPreference) {
                    score += categoryPreference.weight * 2;
                }

                // Score basé sur la localisation
                if (userPreference.preferredLocations.length > 0) {
                    const locationMatch = userPreference.preferredLocations.some(
                        loc => loc.city === event.location.city
                    );
                    if (locationMatch) score += 1;
                }

                // Score basé sur les horaires préférés
                if (userPreference.availableDays.includes(
                    new Date(event.startDate).toLocaleLowerCase('en-US', { weekday: 'long' })
                )) {
                    score += 1;
                }

                // Score basé sur l'historique des interactions
                const interactions = userPreference.interactionHistory.filter(
                    i => i.eventId.toString() === event._id.toString()
                );
                
                interactions.forEach(interaction => {
                    switch (interaction.interactionType) {
                        case 'view':
                            score += 0.1;
                            break;
                        case 'like':
                            score += 0.5;
                            break;
                        case 'share':
                            score += 0.7;
                            break;
                        case 'purchase':
                            score += 1;
                            break;
                        case 'attend':
                            score += 1.5;
                            break;
                    }
                });

                return {
                    event,
                    score
                };
            });

            // Trier par score et retourner les meilleurs résultats
            return scoredEvents
                .sort((a, b) => b.score - a.score)
                .slice(0, 10)
                .map(item => ({
                    ...item.event.toObject(),
                    recommendationScore: item.score
                }));

        } catch (error) {
            console.error('Erreur lors de la génération des recommandations:', error);
            throw error;
        }
    }

    async updateUserPreferences(userId, eventInteraction) {
        try {
            const { eventId, interactionType } = eventInteraction;
            
            let userPreference = await UserPreference.findOne({ userId });
            if (!userPreference) {
                userPreference = new UserPreference({ userId });
            }

            // Ajouter l'interaction à l'historique
            userPreference.interactionHistory.push({
                eventId,
                interactionType,
                timestamp: new Date()
            });

            // Si c'est un achat ou une participation, augmenter le poids de la catégorie
            if (interactionType === 'purchase' || interactionType === 'attend') {
                const event = await Event.findById(eventId);
                if (event) {
                    const categoryIndex = userPreference.categories.findIndex(
                        c => c.category.toString() === event.category.toString()
                    );

                    if (categoryIndex >= 0) {
                        userPreference.categories[categoryIndex].weight += 0.5;
                    } else {
                        userPreference.categories.push({
                            category: event.category,
                            weight: 1
                        });
                    }

                    // Mettre à jour les préférences de localisation
                    if (!userPreference.preferredLocations.some(loc => 
                        loc.city === event.location.city
                    )) {
                        userPreference.preferredLocations.push({
                            city: event.location.city,
                            coordinates: event.location.coordinates
                        });
                    }
                }
            }

            await userPreference.save();
            return userPreference;
        } catch (error) {
            console.error('Erreur lors de la mise à jour des préférences:', error);
            throw error;
        }
    }
}

module.exports = new RecommendationService(); 