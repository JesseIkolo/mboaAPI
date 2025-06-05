const mongoose = require('mongoose');

const loyaltyProgramSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    points: {
        type: Number,
        default: 0
    },
    level: {
        type: String,
        enum: ['bronze', 'silver', 'gold', 'platinum'],
        default: 'bronze'
    },
    pointsHistory: [{
        amount: Number,
        type: {
            type: String,
            enum: ['earned', 'spent']
        },
        reason: {
            type: String,
            enum: ['event_purchase', 'event_attendance', 'referral', 'review', 'redemption']
        },
        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    rewards: [{
        type: {
            type: String,
            enum: ['discount', 'free_ticket', 'vip_access', 'merchandise']
        },
        value: Number, // Pourcentage de réduction ou valeur du reward
        description: String,
        expiryDate: Date,
        isUsed: {
            type: Boolean,
            default: false
        },
        usedDate: Date
    }],
    totalSpent: {
        type: Number,
        default: 0
    },
    eventsAttended: {
        type: Number,
        default: 0
    },
    referrals: [{
        referredUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        date: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ['pending', 'completed'],
            default: 'pending'
        }
    }]
}, {
    timestamps: true
});

// Méthode pour calculer le niveau en fonction des points
loyaltyProgramSchema.methods.calculateLevel = function() {
    if (this.points >= 10000) return 'platinum';
    if (this.points >= 5000) return 'gold';
    if (this.points >= 2000) return 'silver';
    return 'bronze';
};

// Méthode pour ajouter des points
loyaltyProgramSchema.methods.addPoints = async function(amount, reason, eventId = null) {
    this.points += amount;
    this.pointsHistory.push({
        amount,
        type: 'earned',
        reason,
        eventId,
        timestamp: new Date()
    });
    
    // Mettre à jour le niveau
    const newLevel = this.calculateLevel();
    if (newLevel !== this.level) {
        this.level = newLevel;
        // Ajouter une récompense pour le nouveau niveau
        this.rewards.push({
            type: 'discount',
            value: newLevel === 'platinum' ? 20 : newLevel === 'gold' ? 15 : newLevel === 'silver' ? 10 : 5,
            description: `Réduction pour avoir atteint le niveau ${newLevel}`,
            expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 jours
        });
    }
    
    await this.save();
    return this;
};

// Index pour améliorer les performances
loyaltyProgramSchema.index({ userId: 1 });
loyaltyProgramSchema.index({ points: -1 });
loyaltyProgramSchema.index({ level: 1 });

module.exports = mongoose.model('LoyaltyProgram', loyaltyProgramSchema); 