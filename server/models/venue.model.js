const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: String
        },
        country: {
            type: String,
            required: true
        }
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    amenities: [{
        type: String,
        enum: ['parking', 'wifi', 'sound_system', 'stage', 'catering', 'security', 'disabled_access']
    }],
    description: {
        type: String,
        trim: true
    },
    images: [{
        url: String,
        caption: String
    }],
    contactInfo: {
        phone: String,
        email: String,
        website: String
    },
    openingHours: {
        monday: { open: String, close: String },
        tuesday: { open: String, close: String },
        wednesday: { open: String, close: String },
        thursday: { open: String, close: String },
        friday: { open: String, close: String },
        saturday: { open: String, close: String },
        sunday: { open: String, close: String }
    },
    pricing: {
        basePrice: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            default: 'XAF'
        },
        pricePerHour: Number,
        minimumHours: Number
    },
    rules: [{
        type: String
    }],
    status: {
        type: String,
        enum: ['active', 'maintenance', 'closed'],
        default: 'active'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner',
        required: true
    },
    rating: {
        average: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        count: {
            type: Number,
            default: 0
        }
    }
}, {
    timestamps: true
});

// Index pour la recherche géospatiale
venueSchema.index({ location: '2dsphere' });

// Index pour améliorer les performances de recherche
venueSchema.index({ 'address.city': 1, status: 1 });
venueSchema.index({ owner: 1 });

// Méthode pour calculer la disponibilité
venueSchema.methods.checkAvailability = async function(startDate, endDate) {
    const Event = mongoose.model('Event');
    const conflictingEvents = await Event.find({
        venue: this._id,
        $or: [
            {
                startDate: { $lt: endDate },
                endDate: { $gt: startDate }
            }
        ]
    });
    return conflictingEvents.length === 0;
};

// Méthode pour calculer le prix total
venueSchema.methods.calculatePrice = function(hours) {
    if (hours < this.pricing.minimumHours) {
        return this.pricing.basePrice;
    }
    return this.pricing.basePrice + (this.pricing.pricePerHour * (hours - this.pricing.minimumHours));
};

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue; 