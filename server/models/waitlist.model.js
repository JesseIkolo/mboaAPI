// --- models/waitlist.model.js ---
const mongoose = require('mongoose');

const waitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  __v: {
    type: Number,
    default: 0
  }
}, {
  collection: 'waitlists' // Spécifier explicitement le nom de la collection
});

module.exports = mongoose.model('Waitlist', waitlistSchema);
