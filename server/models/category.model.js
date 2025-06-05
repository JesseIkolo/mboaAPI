const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    icon: {
        type: String // URL de l'icône
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    icon: {
        type: String // URL de l'icône
    },
    color: {
        type: String,
        default: '#000000'
    },
    subCategories: [subCategorySchema],
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

// Index pour améliorer les performances des recherches
categorySchema.index({ status: 1 });
categorySchema.index({ 'subCategories.name': 1 });

module.exports = mongoose.model('Category', categorySchema); 