const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    categories: [{
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        weight: {
            type: Number,
            default: 1
        }
    }],
    priceRange: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 1000000
        }
    },
    preferredLocations: [{
        city: String,
        coordinates: {
            type: {
                type: String,
                enum: ['Point'],
                default: 'Point'
            },
            coordinates: [Number] // [longitude, latitude]
        }
    }],
    interactionHistory: [{
        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        },
        interactionType: {
            type: String,
            enum: ['view', 'like', 'share', 'purchase', 'attend']
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    availableDays: [{
        type: String,
        enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    }],
    preferredTimes: {
        start: String, // Format: "HH:mm"
        end: String    // Format: "HH:mm"
    }
}, {
    timestamps: true
});

// Index pour améliorer les performances
userPreferenceSchema.index({ userId: 1 });
userPreferenceSchema.index({ 'preferredLocations.coordinates': '2dsphere' });

module.exports = mongoose.model('UserPreference', userPreferenceSchema); 