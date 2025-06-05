# Mboa Events API

API de gestion d'événements avec des fonctionnalités avancées pour la plateforme Mboa Events.

## 🚀 Fonctionnalités

- **Système de recommandation** : Suggestions personnalisées d'événements basées sur les préférences utilisateur
- **Programme de fidélité** : Gestion des points et récompenses pour les utilisateurs fidèles
- **Analytics avancés** : Statistiques détaillées sur les événements et leur performance
- **Gestion des horaires** : Détection et résolution des conflits d'horaires
- **Système de chat** : Messagerie en temps réel entre les utilisateurs

## 📋 Prérequis

- Node.js (v14 ou supérieur)
- MongoDB (v4.4 ou supérieur)
- npm ou yarn

## 🛠 Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/mboaAPI.git
cd mboaAPI/server
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
```bash
cp .env.example .env
```
Puis modifiez le fichier `.env` avec vos configurations.

4. Lancez le serveur :
```bash
npm run dev  # pour le développement
npm start    # pour la production
```

## 🔑 Configuration

Variables d'environnement requises :

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mboa_events
JWT_SECRET=votre_secret_jwt
EMAIL_SERVICE=smtp.gmail.com
EMAIL_USER=votre@email.com
EMAIL_PASSWORD=votre_mot_de_passe
```

## 📚 Documentation API

La documentation complète de l'API est disponible via Swagger UI à l'adresse :
```
http://localhost:3000/api-docs
```

### Principales routes :

#### 🔐 Authentification
- POST `/api/auth/register` - Inscription
- POST `/api/auth/login` - Connexion
- POST `/api/auth/forgot-password` - Demande de réinitialisation de mot de passe
- POST `/api/auth/reset-password` - Réinitialisation du mot de passe

#### 📊 Recommandations
- GET `/api/recommendations` - Obtenir les événements recommandés
- POST `/api/recommendations/preferences` - Mettre à jour les préférences

#### 🎁 Programme de fidélité
- GET `/api/loyalty/status` - Consulter son statut
- POST `/api/loyalty/points` - Ajouter des points
- GET `/api/loyalty/rewards` - Liste des récompenses disponibles

#### 📈 Analytics
- GET `/api/analytics/events/{eventId}` - Statistiques d'un événement
- GET `/api/analytics/dashboard` - Tableau de bord général
- POST `/api/analytics/events/compare` - Comparaison d'événements

#### 📅 Gestion des horaires
- GET `/api/schedule/conflicts/{eventId}` - Vérifier les conflits
- GET `/api/schedule/alternatives/{eventId}` - Créneaux alternatifs
- GET `/api/schedule/venue/{venueId}/availability` - Disponibilité des lieux

#### 💬 Chat
- GET/POST `/api/chat` - Gestion des conversations
- GET/POST `/api/chat/{chatId}/messages` - Gestion des messages
- POST `/api/chat/{chatId}/participants` - Gestion des participants

## 🔒 Sécurité

L'API utilise JWT (JSON Web Tokens) pour l'authentification. Pour les requêtes authentifiées, incluez le token dans le header :

```http
Authorization: Bearer votre_token_jwt
```

## 📦 Structure du projet

```
server/
├── config/         # Configuration
├── controllers/    # Contrôleurs
├── middlewares/    # Middlewares
├── models/         # Modèles Mongoose
├── routes/         # Routes
├── services/       # Services métier
├── utils/          # Utilitaires
└── app.js         # Point d'entrée
```

## 🧪 Tests

Pour exécuter les tests :

```bash
npm test          # Tous les tests
npm run test:unit # Tests unitaires
npm run test:e2e  # Tests end-to-end
```

## 📈 Monitoring

L'API inclut des métriques de performance et de santé accessibles via :
```
http://localhost:3000/health
http://localhost:3000/metrics
```

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Contact

Support - support@mboaevents.com
