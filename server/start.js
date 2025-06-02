// start.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./server.js');

dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connecté');
  app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
}).catch(err => console.error('Erreur de connexion MongoDB:', err));