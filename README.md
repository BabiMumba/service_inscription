# API de Préinscription et Gestion de Cote - Université Don Bosco de Lubumbashi

## Description du Projet

Cette API permet de gérer le processus complet d'inscription des étudiants à l'Université Don Bosco de Lubumbashi, de la préinscription jusqu'à la gestion des cotes. Elle offre une interface RESTful complète pour gérer les préinscriptions, les tests, les résultats, les paiements, les confirmations et les cotes des étudiants.

## Fonctionnalités

- **Préinscriptions** : Gestion des préinscriptions des étudiants avec leurs informations personnelles
- **Tests & Résultats** : Enregistrement des résultats des tests et gestion des sélections
- **Paiements** : Suivi des paiements des frais d'inscription
- **Confirmations** : Confirmation des admissions des étudiants
- **Cotes** : Enregistrement et suivi des cotes des étudiants

## Technologies Utilisées

- **Backend** : Node.js, Express.js
- **Base de données** : MongoDB
- **Documentation API** : Swagger UI
- **Déploiement** : Vercel

## Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)
- MongoDB (local ou Atlas)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/babimumba/service-inscription.git
   cd service-inscription
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Créez un fichier `.env` à la racine du projet avec les variables suivantes :
   ```
   PORT=3000
   MONGODB_URI=votre_uri_mongodb
   JWT_SECRET=votre_secret_jwt
   ```

4. Démarrez le serveur :
   ```bash
   npm start
   ```

## Utilisation de l'API

### Documentation Swagger

La documentation complète de l'API est disponible via Swagger UI à l'adresse :
```
http://localhost:3000/api-docs
```

### Points d'accès principaux

#### Préinscriptions
- `POST /preinscriptions` : Créer une nouvelle préinscription
- `GET /preinscriptions` : Obtenir toutes les préinscriptions
- `GET /preinscriptions/:id` : Obtenir une préinscription spécifique

#### Tests
- `POST /tests` : Enregistrer les résultats d'un test
- `GET /tests` : Obtenir tous les tests
- `GET /tests/:id` : Obtenir un test spécifique

#### Résultats
- `POST /resultats/selection` : Sélectionner un candidat pour l'admission
- `GET /resultats/admis` : Obtenir la liste des candidats admis

#### Paiements
- `POST /paiements` : Enregistrer un nouveau paiement
- `GET /paiements` : Obtenir tous les paiements
- `GET /paiements/:id` : Obtenir un paiement spécifique

#### Confirmations
- `POST /confirmations` : Confirmer l'admission d'un étudiant
- `GET /confirmations` : Obtenir toutes les confirmations

#### Cotes
- `POST /cotes` : Ajouter une cote pour un étudiant
- `GET /cotes` : Obtenir toutes les cotes
- `GET /cotes/:id` : Obtenir une cote spécifique

### Exemples d'utilisation avec Postman

#### Créer une préinscription
```
POST http://localhost:3000/preinscriptions
Content-Type: application/json

{
  "nom": "Mumba",
  "prenom": "Babi",
  "dateNaissance": "1995-05-15",
  "email": "babimumba243@gmail.com",
  "telephone": "+243 812345678",
  "filiere": "Informatique",
  "niveau": "Licence 1"
}
```

#### Enregistrer un paiement
```
POST http://localhost:3000/paiements
Content-Type: application/json

{
  "preinscriptionId": "id_de_la_preinscription",
  "montant": 150,
  "modePaiement": "Mobile Money",
  "reference": "REF123456"
}
```

#### Ajouter une cote
```
POST http://localhost:3000/cotes
Content-Type: application/json

{
  "etudiantId": "id_de_l_etudiant",
  "matiere": "Programmation Web",
  "cote": 16,
  "coefficient": 3
}
```

## Déploiement

Le projet est configuré pour être déployé sur Vercel. Pour déployer :

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre dépôt GitHub
3. Configurez les variables d'environnement dans les paramètres du projet Vercel
4. Déployez

## Structure du Projet

```
service-inscription/
├── controllers/         # Contrôleurs pour chaque route
├── models/              # Modèles Mongoose
├── routes/              # Routes de l'API
├── middleware/          # Middleware (authentification, validation)
├── database/            # Configuration de la base de données
├── .env                 # Variables d'environnement
├── index.js             # Point d'entrée de l'application
└── package.json         # Dépendances et scripts
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Contact

Pour toute question ou suggestion, contactez :
- Email : babimumba243@gmail.com
- GitHub : [babimumba](https://github.com/babimumba) 