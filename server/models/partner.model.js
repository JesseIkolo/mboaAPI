const mongoose = require('mongoose');

const businessManagerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    permissions: {
        canCreateEvent: {
            type: Boolean,
            default: false
        },
        canDeleteEvent: {
            type: Boolean,
            default: false
        },
        canAddManager: {
            type: Boolean,
            default: false
        },
        canDeleteManager: {
            type: Boolean,
            default: false
        },
        canEditCompanyProfile: {
            type: Boolean,
            default: false
        },
        canManageMessages: {
            type: Boolean,
            default: false
        },
        canContactSupport: {
            type: Boolean,
            default: false
        },
        canViewTransactions: {
            type: Boolean,
            default: false
        },
        canRenewSubscription: {
            type: Boolean,
            default: false
        },
        canViewStatistics: {
            type: Boolean,
            default: false
        }
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

const partnerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        required: true
    },
    subscriptionStatus: {
        type: String,
        enum: ['active', 'inactive', 'pending'],
        default: 'pending'
    },
    subscriptionType: {
        type: String,
        enum: ['mboaPlus', 'premium'],
        required: true
    },
    subscriptionStartDate: {
        type: Date,
        required: true
    },
    subscriptionEndDate: {
        type: Date,
        required: true
    },
    verificationDocuments: [{
        type: String
    }],
    isVerified: {
        type: Boolean,
        default: false
    },
    businessManagers: [businessManagerSchema],
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

// Middleware pour vérifier le nombre de Business Managers
partnerSchema.pre('save', function(next) {
    if (this.subscriptionType === 'mboaPlus' && this.businessManagers.length > 3) {
        const err = new Error('Le plan Mboa Plus est limité à 3 Business Managers maximum');
        return next(err);
    }
    next();
});

module.exports = mongoose.model('Partner', partnerSchema); 