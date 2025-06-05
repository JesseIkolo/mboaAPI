const Transaction = require('../models/transaction.model');
const Partner = require('../models/partner.model');
const campayService = require('../services/campay.service');
const { v4: uuidv4 } = require('uuid');

// Configuration des prix (en XAF)
const SUBSCRIPTION_PRICES = {
    mboaPlus: {
        monthly: 25000,
        yearly: 250000
    },
    premium: {
        monthly: 50000,
        yearly: 500000
    }
};

exports.initiateSubscriptionPayment = async (req, res) => {
    try {
        const { subscriptionType, duration, phoneNumber, operator } = req.body;
        const partnerId = req.params.partnerId;

        // Vérifier si le partenaire existe
        const partner = await Partner.findById(partnerId);
        if (!partner) {
            return res.status(404).json({ message: "Partenaire non trouvé" });
        }

        // Calculer le montant
        const priceKey = duration === 12 ? 'yearly' : 'monthly';
        const amount = SUBSCRIPTION_PRICES[subscriptionType][priceKey];

        if (!amount) {
            return res.status(400).json({ message: "Type d'abonnement ou durée invalide" });
        }

        // Créer une référence unique
        const externalReference = uuidv4();

        // Créer la transaction dans notre base de données
        const transaction = new Transaction({
            partnerId,
            amount,
            subscriptionType,
            subscriptionDuration: duration,
            paymentMethod: operator,
            externalReference,
            paymentDetails: {
                phoneNumber,
                operatorName: operator
            }
        });

        await transaction.save();

        // Initier le paiement avec Campay
        const paymentResponse = await campayService.initiatePayment(
            amount,
            phoneNumber,
            operator,
            externalReference
        );

        // Mettre à jour la transaction avec la référence Campay
        transaction.campayReference = paymentResponse.reference;
        await transaction.save();

        res.status(200).json({
            message: "Paiement initié avec succès",
            transaction: transaction,
            campayResponse: paymentResponse
        });
    } catch (error) {
        console.error('Erreur lors de l\'initiation du paiement:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.handlePaymentWebhook = async (req, res) => {
    try {
        const { reference, status, external_reference } = req.body;

        // Trouver la transaction correspondante
        const transaction = await Transaction.findOne({ externalReference: external_reference });
        if (!transaction) {
            return res.status(404).json({ message: "Transaction non trouvée" });
        }

        // Mettre à jour le statut de la transaction
        transaction.status = status === 'successful' ? 'completed' : 'failed';
        if (req.body.operator_transaction_id) {
            transaction.paymentDetails.operatorTransactionId = req.body.operator_transaction_id;
        }
        await transaction.save();

        // Si le paiement est réussi, mettre à jour l'abonnement du partenaire
        if (status === 'successful') {
            const partner = await Partner.findById(transaction.partnerId);
            if (partner) {
                partner.subscriptionType = transaction.subscriptionType;
                partner.subscriptionStatus = 'active';
                
                // Mettre à jour les dates d'abonnement
                partner.subscriptionStartDate = new Date();
                const endDate = new Date();
                endDate.setMonth(endDate.getMonth() + transaction.subscriptionDuration);
                partner.subscriptionEndDate = endDate;

                await partner.save();
            }
        }

        res.status(200).json({ message: "Webhook traité avec succès" });
    } catch (error) {
        console.error('Erreur lors du traitement du webhook:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.checkPaymentStatus = async (req, res) => {
    try {
        const { transactionId } = req.params;

        const transaction = await Transaction.findById(transactionId);
        if (!transaction) {
            return res.status(404).json({ message: "Transaction non trouvée" });
        }

        if (transaction.campayReference) {
            const statusResponse = await campayService.checkTransactionStatus(transaction.campayReference);
            
            // Mettre à jour le statut si nécessaire
            if (statusResponse.status === 'successful' && transaction.status !== 'completed') {
                transaction.status = 'completed';
                await transaction.save();

                // Mettre à jour l'abonnement du partenaire
                const partner = await Partner.findById(transaction.partnerId);
                if (partner) {
                    partner.subscriptionType = transaction.subscriptionType;
                    partner.subscriptionStatus = 'active';
                    partner.subscriptionStartDate = new Date();
                    const endDate = new Date();
                    endDate.setMonth(endDate.getMonth() + transaction.subscriptionDuration);
                    partner.subscriptionEndDate = endDate;
                    await partner.save();
                }
            }

            res.status(200).json({
                transaction: transaction,
                campayStatus: statusResponse
            });
        } else {
            res.status(200).json({ transaction: transaction });
        }
    } catch (error) {
        console.error('Erreur lors de la vérification du statut:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.getPartnerTransactions = async (req, res) => {
    try {
        const { partnerId } = req.params;
        const { page = 1, limit = 10 } = req.query;

        const transactions = await Transaction.find({ partnerId })
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await Transaction.countDocuments({ partnerId });

        res.status(200).json({
            transactions,
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / limit)
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des transactions:', error);
        res.status(500).json({ message: error.message });
    }
}; 