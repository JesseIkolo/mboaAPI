// --- models/user.model.js ---
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

// Définition des permissions possibles
const PERMISSIONS = {
    MANAGE_USERS: 'manage_users',
    MANAGE_PARTNERS: 'manage_partners',
    MANAGE_ADS: 'manage_ads',
    MANAGE_EVENTS: 'manage_events',
    MANAGE_CHATS: 'manage_chats',
    MANAGE_TRANSACTIONS: 'manage_transactions',
    MANAGE_CATEGORIES: 'manage_categories',
    VALIDATE_ADMINS: 'validate_admins'
};

// Définition des rôles et leurs permissions par défaut
const ADMIN_ROLES = {
    ACCOUNT_MANAGER: 'account_manager',
    ADS_MANAGER: 'ads_manager',
    MBOA_MANAGER: 'mboa_manager',
    SUPERADMIN: 'superadmin'
};

const DEFAULT_PERMISSIONS = {
    [ADMIN_ROLES.ACCOUNT_MANAGER]: [
        PERMISSIONS.MANAGE_USERS,
        PERMISSIONS.MANAGE_PARTNERS
    ],
    [ADMIN_ROLES.ADS_MANAGER]: [
        PERMISSIONS.MANAGE_ADS
    ],
    [ADMIN_ROLES.MBOA_MANAGER]: [
        PERMISSIONS.MANAGE_USERS,
        PERMISSIONS.MANAGE_PARTNERS,
        PERMISSIONS.MANAGE_ADS,
        PERMISSIONS.MANAGE_EVENTS,
        PERMISSIONS.MANAGE_CHATS,
        PERMISSIONS.MANAGE_TRANSACTIONS,
        PERMISSIONS.MANAGE_CATEGORIES
    ],
    [ADMIN_ROLES.SUPERADMIN]: Object.values(PERMISSIONS)
};

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    otp: { type: String },
    otpExpires: { type: Date },
    emailToken: { type: String },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    otpData: {
        code: String,
        expiresAt: Date,
        attempts: {
            type: Number,
            default: 0
        }
    },
    isVerified: { type: Boolean, default: false },
    role: { 
        type: String, 
        enum: ['user', ...Object.values(ADMIN_ROLES)], 
        default: 'user' 
    },
    adminType: {
        type: String,
        enum: Object.values(ADMIN_ROLES),
        required: function() { return this.role !== 'user'; }
    },
    permissions: [{
        type: String,
        enum: Object.values(PERMISSIONS)
    }],
    isAdminValidated: { type: Boolean, default: false },
    isSubscribed: { type: Boolean, default: false },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Utilisateurs qui suivent cet utilisateur
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Utilisateurs que cet utilisateur suit
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    // Champs pour la gestion du blocage de compte
    loginAttempts: {
        type: Number,
        default: 0
    },
    lastLoginAttempt: {
        type: Date
    },
    accountLocked: {
        type: Boolean,
        default: false
    },
    lockUntil: {
        type: Date
    },
    lockCount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'waitlist'],
        default: 'waitlist'
    },
    subscription: {
        type: String,
        enum: ['freemium', 'premium', 'none'],
        default: 'freemium'
    }
}, {
    timestamps: true
});

// Méthode pour vérifier si l'utilisateur a une permission spécifique
userSchema.methods.hasPermission = function(permission) {
    return this.permissions.includes(permission);
};

// Méthode pour vérifier si l'utilisateur a plusieurs permissions
userSchema.methods.hasPermissions = function(requiredPermissions) {
    return requiredPermissions.every(permission => this.permissions.includes(permission));
};

// Middleware pre-save pour définir les permissions par défaut
userSchema.pre('save', function(next) {
    if (this.isModified('adminType') && this.role !== 'user') {
        this.permissions = DEFAULT_PERMISSIONS[this.adminType] || [];
    }
    next();
});

// Méthode pour incrémenter les tentatives de connexion
userSchema.methods.incrementLoginAttempts = async function() {
    // Mettre à jour le nombre de tentatives et la date de dernière tentative
    this.loginAttempts += 1;
    this.lastLoginAttempt = new Date();

    // Si le nombre de tentatives atteint 5, bloquer le compte
    if (this.loginAttempts >= 5) {
        this.accountLocked = true;
        this.lockCount += 1;
        
        // Calculer la durée du blocage (progressive)
        const lockDuration = Math.min(30, Math.pow(2, this.lockCount - 1)) * 60 * 1000; // en millisecondes
        this.lockUntil = new Date(Date.now() + lockDuration);
    }

    await this.save();
    return this.accountLocked;
};

// Méthode pour réinitialiser les tentatives de connexion
userSchema.methods.resetLoginAttempts = async function() {
    this.loginAttempts = 0;
    this.lastLoginAttempt = null;
    this.accountLocked = false;
    this.lockUntil = null;
    await this.save();
};

// Méthode pour vérifier si le compte est bloqué
userSchema.methods.isLocked = function() {
    if (!this.accountLocked) return false;
    if (!this.lockUntil) return false;
    
    // Si la période de blocage est terminée, retourner false
    if (Date.now() > this.lockUntil) {
        return false;
    }
    
    return true;
};

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password') && !this.password.startsWith('$2b$')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Créer et exporter le modèle
const User = mongoose.model('User', userSchema);

module.exports = User;
module.exports.PERMISSIONS = PERMISSIONS;
module.exports.ADMIN_ROLES = ADMIN_ROLES;
module.exports.DEFAULT_PERMISSIONS = DEFAULT_PERMISSIONS;
