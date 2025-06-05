// --- models/adminLog.model.js ---
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ACTION_TYPES = {
    USER_MANAGEMENT: 'user_management',
    PERMISSION_UPDATE: 'permission_update',
    ADMIN_VALIDATION: 'admin_validation',
    ADMIN_REVOCATION: 'admin_revocation',
    PARTNER_VALIDATION: 'partner_validation',
    EVENT_MODERATION: 'event_moderation',
    SYSTEM_SETTINGS: 'system_settings',
    SECURITY_ACTION: 'security_action'
};

const adminLogSchema = new Schema({
    adminId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    actionType: {
        type: String,
        enum: Object.values(ACTION_TYPES),
        required: true
    },
    action: {
        type: String,
        required: true
    },
    targetId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    details: {
        type: Object,
        default: {}
    },
    ipAddress: String,
    userAgent: String,
    status: {
        type: String,
        enum: ['success', 'failure'],
        required: true
    },
    errorMessage: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Index pour une recherche efficace
adminLogSchema.index({ adminId: 1, createdAt: -1 });
adminLogSchema.index({ actionType: 1, createdAt: -1 });
adminLogSchema.index({ status: 1, createdAt: -1 });

const AdminLog = mongoose.model('AdminLog', adminLogSchema);

module.exports = {
    AdminLog,
    ACTION_TYPES
}; 