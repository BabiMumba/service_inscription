const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./database/db');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;
const preinscriptionRoutes = require('./routes/preinscription.routes');
const resultatRoutes = require('./routes/resultat.routes');
const paiementRoutes = require('./routes/paiement.routes');
const confirmationRoutes = require('./routes/confirmation.routes');
const testRoutes = require('./routes/test.routes');
const coteRoutes = require('./routes/cote.routes');


app.use(cors());
app.use(express.json());

app.use('/preinscriptions', preinscriptionRoutes);
app.use('/resultats', resultatRoutes);
app.use('/paiements', paiementRoutes);
app.use('/confirmations', confirmationRoutes);
app.use('/tests', testRoutes);
app.use('/cotes', coteRoutes);



app.get('/', (req, res) => {
  res.send(
    '<h1>Bienvenue sur l\'API de préinscription !</h1><p>Utilisez les routes définies pour interagir avec l\'API.</p>'
  );
});

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});



// Définir les options de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de gestion des préinscriptions et des cotes',
      version: '1.0.0',
      description: 'API permettant de gérer les préinscriptions des étudiants, leurs tests, résultats et les cotes dans un environnement académique.',
      contact: {
        name: 'Babi Mumba',
        email: 'babimumba243@gmail.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur de développement'
      }
    ],
    tags: [
      {
        name: 'Préinscription',
        description: 'Opérations liées aux préinscriptions des étudiants'
      },
      {
        name: 'Tests',
        description: 'Gestion des tests et évaluations'
      },
      {
        name: 'Résultats',
        description: 'Gestion des résultats des tests'
      },
      {
        name: 'Paiements',
        description: 'Gestion des paiements'
      },
      {
        name: 'Confirmations',
        description: 'Gestion des confirmations d\'inscription'
      },
      {
        name: 'Cotes',
        description: 'Gestion des cotes et notes'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./routes/*.js'],
};

// Initialiser Swagger avec les options définies
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Utiliser swagger-ui-express pour exposer la documentation Swagger à /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
