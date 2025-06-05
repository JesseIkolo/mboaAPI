const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    partnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'XAF'
    },
    subscriptionType: {
        type: String,
        enum: ['mboaPlus', 'premium'],
        required: true
    },
    subscriptionDuration: {
        type: Number, // Durée en mois
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['mtn', 'orange', 'eu_mobile'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'pending'
    },
    campayReference: {
        type: String,
        index: true,
        sparse: true
    },
    externalReference: {
        type: String,
        index: true,
        required: true
    },
    paymentDetails: {
        phoneNumber: String,
        operatorTransactionId: String,
        operatorName: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index pour améliorer les performances des recherches
transactionSchema.index({ partnerId: 1, status: 1 });

module.exports = mongoose.model('Transaction', transactionSchema); 