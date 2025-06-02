// --- models/user.model.js ---
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    otp: { type: String },
    otpExpires: { type: Date },
    emailToken: { type: String },
    emailVerified: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isSubscribed: { type: Boolean, default: false },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Utilisateurs qui suivent cet utilisateur
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Utilisateurs que cet utilisateur suit
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
