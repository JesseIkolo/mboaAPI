// --- controllers/waitlist.controller.js ---
const Waitlist = require('../models/waitlist.model.js');
const EmailService = require('../services/email.service.js');

const addToWaitlist = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const exists = await Waitlist.findOne({ $or: [{ email }, { phone }] });
    if (exists) return res.status(409).json({ message: 'Déjà inscrit sur la liste' });

    const entry = new Waitlist({ name, email, phone });
    await entry.save();

    if (email) {
      await EmailService.sendEmailValidation(email, 'waitlist-confirmation');
    }
    
    res.status(201).json({ message: "Inscription à la liste d'attente réussie" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWaitlist = async (req, res) => {
  try {
    const entries = await Waitlist.find();
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addToWaitlist,
  getWaitlist
};
