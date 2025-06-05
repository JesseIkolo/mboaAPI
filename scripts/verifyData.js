const mongoose = require('mongoose');
const User = require('../models/user.model').User;
const Partner = require('../models/partner.model');
const Event = require('../models/event.model');
const Category = require('../models/category.model');

// Configuration MongoDB
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mboaevents';
mongoose.set('debug', true);

// ... Le reste du code existant ... 