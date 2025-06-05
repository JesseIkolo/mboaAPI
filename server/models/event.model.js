// --- models/event.model.js ---
const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    replies: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    status: {
        type: String,
        enum: ['active', 'hidden', 'deleted'],
        default: 'active'
    }
}, {
    timestamps: true
});

const ticketTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    quantitySold: {
        type: Number,
        default: 0
    },
    benefits: [String], // Liste des avantages inclus
    saleStartDate: Date,
    saleEndDate: Date
});

const participantSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ticketType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TicketType'
    },
    status: {
        type: String,
        enum: ['registered', 'attended', 'cancelled'],
        default: 'registered'
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    checkinDate: Date
});

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        maxlength: 200
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category.subCategories'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    location: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: String,
        country: {
            type: String,
            default: 'Cameroun'
        },
        coordinates: {
            type: {
                type: String,
                enum: ['Point'],
                default: 'Point'
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                required: true
            }
        },
        additionalInfo: String
    },
    banner: String, // URL de l'image principale
    gallery: [String], // URLs des images supplémentaires
    ticketTypes: [ticketTypeSchema],
    isPublic: {
        type: Boolean,
        default: false
    },
    visibility: {
        type: String,
        enum: ['public', 'private', 'network'],
        default: 'network'
    },
    capacity: {
        type: Number,
        required: true
    },
    participants: [participantSchema],
    comments: [commentSchema],
    shares: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        platform: {
            type: String,
            enum: ['facebook', 'twitter', 'whatsapp', 'internal']
        },
        sharedAt: {
            type: Date,
            default: Date.now
        }
    }],
    status: {
        type: String,
        enum: ['draft', 'published', 'cancelled', 'completed'],
        default: 'draft'
    },
    tags: [String],
    views: {
        type: Number,
        default: 0
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    settings: {
        allowComments: {
            type: Boolean,
            default: true
        },
        allowSharing: {
            type: Boolean,
            default: true
        },
        requireApproval: {
            type: Boolean,
            default: false
        },
        showGuestList: {
            type: Boolean,
            default: true
        },
        showRemainingTickets: {
            type: Boolean,
            default: true
        }
    }
}, {
    timestamps: true
});

// Index pour la géolocalisation
eventSchema.index({ 'location.coordinates': '2dsphere' });

// Index pour améliorer les performances des recherches
eventSchema.index({ category: 1, subCategory: 1 });
eventSchema.index({ startDate: 1 });
eventSchema.index({ status: 1 });
eventSchema.index({ createdBy: 1 });
eventSchema.index({ visibility: 1 });
eventSchema.index({ tags: 1 });

// Méthodes virtuelles
eventSchema.virtual('totalParticipants').get(function() {
    return this.participants.length;
});

eventSchema.virtual('availableTickets').get(function() {
    return this.capacity - this.participants.length;
});

eventSchema.virtual('isSoldOut').get(function() {
    return this.availableTickets <= 0;
});

// Middleware pour vérifier la capacité
eventSchema.pre('save', function(next) {
    if (this.participants.length > this.capacity) {
        next(new Error('Le nombre de participants ne peut pas dépasser la capacité'));
    }
    next();
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

