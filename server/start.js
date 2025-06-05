// start.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./server.js');

dotenv.config();

// Configuration du port avec valeur par défaut
const PORT = process.env.PORT || 2103;

// Validation des variables d'environnement requises
const requiredEnvVars = ['MONGODB_URI'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Variables d\'environnement manquantes:', missingEnvVars.join(', '));
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connecté');
  app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
}).catch(err => console.error('Erreur de connexion MongoDB:', err));