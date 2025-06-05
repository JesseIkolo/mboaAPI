const LoyaltyProgram = require('../models/loyaltyProgram.model');
const { validationResult } = require('express-validator');

class LoyaltyController {
    async getLoyaltyStatus(req, res) {
        try {
            const userId = req.user.id;
            let loyaltyProgram = await LoyaltyProgram.findOne({ userId })
                .populate('pointsHistory.eventId', 'name startDate')
                .populate('referrals.referredUser', 'name email');

            if (!loyaltyProgram) {
                loyaltyProgram = new LoyaltyProgram({ userId });
                await loyaltyProgram.save();
            }

            res.status(200).json({
                success: true,
                data: loyaltyProgram
            });
        } catch (error) {
            console.error('Erreur lors de la récupération du statut de fidélité:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération du statut de fidélité',
                error: error.message
            });
        }
    }

    async addPoints(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const userId = req.user.id;
            const { amount, reason, eventId } = req.body;

            let loyaltyProgram = await LoyaltyProgram.findOne({ userId });
            if (!loyaltyProgram) {
                loyaltyProgram = new LoyaltyProgram({ userId });
            }

            await loyaltyProgram.addPoints(amount, reason, eventId);

            res.status(200).json({
                success: true,
                data: loyaltyProgram
            });
        } catch (error) {
            console.error('Erreur lors de l\'ajout des points:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'ajout des points',
                error: error.message
            });
        }
    }

    async getRewards(req, res) {
        try {
            const userId = req.user.id;
            const loyaltyProgram = await LoyaltyProgram.findOne({ userId });

            if (!loyaltyProgram) {
                return res.status(404).json({
                    success: false,
                    message: 'Programme de fidélité non trouvé'
                });
            }

            const activeRewards = loyaltyProgram.rewards.filter(
                reward => !reward.isUsed && reward.expiryDate > new Date()
            );

            res.status(200).json({
                success: true,
                data: activeRewards
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des récompenses:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des récompenses',
                error: error.message
            });
        }
    }

    async useReward(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const userId = req.user.id;
            const { rewardId } = req.params;

            const loyaltyProgram = await LoyaltyProgram.findOne({ userId });
            if (!loyaltyProgram) {
                return res.status(404).json({
                    success: false,
                    message: 'Programme de fidélité non trouvé'
                });
            }

            const reward = loyaltyProgram.rewards.id(rewardId);
            if (!reward) {
                return res.status(404).json({
                    success: false,
                    message: 'Récompense non trouvée'
                });
            }

            if (reward.isUsed) {
                return res.status(400).json({
                    success: false,
                    message: 'Cette récompense a déjà été utilisée'
                });
            }

            if (reward.expiryDate < new Date()) {
                return res.status(400).json({
                    success: false,
                    message: 'Cette récompense a expiré'
                });
            }

            reward.isUsed = true;
            reward.usedDate = new Date();
            await loyaltyProgram.save();

            res.status(200).json({
                success: true,
                data: reward
            });
        } catch (error) {
            console.error('Erreur lors de l\'utilisation de la récompense:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'utilisation de la récompense',
                error: error.message
            });
        }
    }

    async addReferral(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const userId = req.user.id;
            const { referredUserId } = req.body;

            let loyaltyProgram = await LoyaltyProgram.findOne({ userId });
            if (!loyaltyProgram) {
                loyaltyProgram = new LoyaltyProgram({ userId });
            }

            // Vérifier si l'utilisateur n'a pas déjà été parrainé
            const existingReferral = loyaltyProgram.referrals.find(
                ref => ref.referredUser.toString() === referredUserId
            );

            if (existingReferral) {
                return res.status(400).json({
                    success: false,
                    message: 'Cet utilisateur a déjà été parrainé'
                });
            }

            loyaltyProgram.referrals.push({
                referredUser: referredUserId,
                status: 'pending'
            });

            await loyaltyProgram.save();

            res.status(200).json({
                success: true,
                data: loyaltyProgram
            });
        } catch (error) {
            console.error('Erreur lors de l\'ajout du parrainage:', error);
            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'ajout du parrainage',
                error: error.message
            });
        }
    }
}

module.exports = new LoyaltyController(); 