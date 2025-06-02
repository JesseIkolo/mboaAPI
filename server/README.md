# Mboa Events API

Bienvenue dans l'API RESTful pour la gestion des utilisateurs de l'application **Mboa Events**.

## 🔐 Authentification
- Inscription avec OTP par téléphone et email
- Connexion par mot de passe
- Réinitialisation du mot de passe via OTP

## 📦 Technologies
- Node.js + Express
- MongoDB + Mongoose
- JWT pour l'authentification
- Jest + Supertest pour les tests
- MongoDB Memory Server pour les tests isolés

## ✅ Couverture de Test

![Coverage](./coverage/badge.svg)

## 🚀 Démarrer

```bash
npm install
npm run dev
```

## 🧪 Tests

```bash
npm run test         # Exécute les tests unitaires
npm run test:coverage # Génère le rapport de couverture
npm run test:badge    # Génère le badge SVG de couverture
```

## 📁 Structure

- `controllers/` → logique métier
- `routes/` → routes Express
- `models/` → schémas Mongoose
- `middlewares/` → middlewares JWT & admin
- `tests/` → tests Jest + Supertest

## ✨ Auteurs
- Projet Mboa Events (2025)

---

Ce projet est sous licence MIT. Toute contribution est la bienvenue.
