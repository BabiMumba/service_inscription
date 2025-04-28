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
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API de Préinscription - Université</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>
        :root {
          --primary-color: #4a6cf7;
          --secondary-color: #6c757d;
          --success-color: #28a745;
          --background-color: #f8f9fa;
          --text-color: #212529;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          color: var(--text-color);
          background-color: var(--background-color);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        header {
          background: linear-gradient(135deg, var(--primary-color), #2a4bd7);
          color: white;
          padding: 80px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
          background-size: cover;
          background-position: center;
          opacity: 0.1;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
        }
        
        h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .subtitle {
          font-size: 1.2rem;
          font-weight: 300;
          max-width: 700px;
          margin: 0 auto 30px;
          opacity: 0.9;
        }
        
        .btn {
          display: inline-block;
          background-color: white;
          color: var(--primary-color);
          padding: 12px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }
        
        .btn-outline {
          background-color: transparent;
          border: 2px solid white;
          color: white;
        }
        
        .btn-outline:hover {
          background-color: white;
          color: var(--primary-color);
        }
        
        .btn-group {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        section {
          padding: 80px 0;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 15px;
        }
        
        .section-title p {
          color: var(--secondary-color);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        
        .feature-card {
          background-color: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        
        .feature-card p {
          color: var(--secondary-color);
        }
        
        .endpoints {
          background-color: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          margin-top: 30px;
        }
        
        .endpoint {
          padding: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .endpoint:last-child {
          border-bottom: none;
        }
        
        .endpoint-method {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 5px;
          font-weight: 500;
          margin-right: 10px;
        }
        
        .method-get {
          background-color: #e3f2fd;
          color: #0d47a1;
        }
        
        .method-post {
          background-color: #e8f5e9;
          color: #1b5e20;
        }
        
        .method-put {
          background-color: #fff3e0;
          color: #e65100;
        }
        
        .method-delete {
          background-color: #ffebee;
          color: #b71c1c;
        }
        
        .endpoint-path {
          font-family: monospace;
          font-size: 1.1rem;
        }
        
        .endpoint-description {
          margin-top: 10px;
          color: var(--secondary-color);
        }
        
        footer {
          background-color: #212529;
          color: white;
          padding: 40px 0;
          text-align: center;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .footer-links {
          display: flex;
          gap: 20px;
          margin: 20px 0;
        }
        
        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        .footer-links a:hover {
          opacity: 1;
        }
        
        .copyright {
          opacity: 0.6;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .section-title h2 {
            font-size: 2rem;
          }
          
          .btn-group {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <div class="container">
          <div class="header-content">
            <h1>Université Don Bosco de Lubumbashi</h1>
            <h2>API de Préinscription et Gestion de Cote</h2>
            <p class="subtitle">Une API complète pour gérer les préinscriptions, tests, résultats et paiements des étudiants</p>
            <div class="btn-group">
              <a href="/api-docs" class="btn">Documentation API</a>
              <a href="https://github.com/babimumba/service_inscription" class="btn btn-outline">GitHub</a>
            </div>
          </div>
        </div>
      </header>
      
      <section>
        <div class="container">
          <div class="section-title">
            <h2>Fonctionnalités</h2>
            <p>Notre API offre une suite complète d'outils pour gérer le processus d'inscription des étudiants</p>
          </div>
          
          <div class="features">
            <div class="feature-card">
              <div class="feature-icon">📝</div>
              <h3>Préinscriptions</h3>
              <p>Gérez les préinscriptions des étudiants avec leurs informations personnelles et documents nécessaires.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">✍️</div>
              <h3>Tests & Résultats</h3>
              <p>Enregistrez les résultats des tests et gérez les sélections des candidats pour l'admission.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">💰</div>
              <h3>Paiements</h3>
              <p>Suivez les paiements des frais d'inscription avec différents modes de paiement supportés.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">✅</div>
              <h3>Confirmations</h3>
              <p>Confirmez les admissions des étudiants et gérez le processus de finalisation.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3>Cotes</h3>
              <p>Enregistrez et suivez les cotes des étudiants pour différentes matières.</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">🔒</div>
              <h3>Sécurité</h3>
              <p>API sécurisée avec authentification JWT pour protéger vos données sensibles.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section style="background-color: #f1f5ff;">
        <div class="container">
          <div class="section-title">
            <h2>Points d'accès API</h2>
            <p>Explorez les différents endpoints disponibles dans notre API</p>
          </div>
          
          <div class="endpoints">
            <div class="endpoint">
              <span class="endpoint-method method-post">POST</span>
              <span class="endpoint-path">/preinscriptions</span>
              <p class="endpoint-description">Créer une nouvelle préinscription d'étudiant</p>
            </div>
            
            <div class="endpoint">
              <span class="endpoint-method method-post">POST</span>
              <span class="endpoint-path">/tests</span>
              <p class="endpoint-description">Enregistrer les résultats d'un test</p>
            </div>
            
            <div class="endpoint">
              <span class="endpoint-method method-post">POST</span>
              <span class="endpoint-path">/resultats/selection</span>
              <p class="endpoint-description">Sélectionner un candidat pour l'admission</p>
            </div>
            
            <div class="endpoint">
              <span class="endpoint-method method-get">GET</span>
              <span class="endpoint-path">/resultats/admis</span>
              <p class="endpoint-description">Obtenir la liste des candidats admis</p>
            </div>
            
            <div class="endpoint">
              <span class="endpoint-method method-post">POST</span>
              <span class="endpoint-path">/paiements</span>
              <p class="endpoint-description">Enregistrer un nouveau paiement</p>
            </div>
            
            <div class="endpoint">
              <span class="endpoint-method method-post">POST</span>
              <span class="endpoint-path">/confirmations</span>
              <p class="endpoint-description">Confirmer l'admission d'un étudiant</p>
            </div>
            
            <div class="endpoint">
              <span class="endpoint-method method-post">POST</span>
              <span class="endpoint-path">/cotes</span>
              <p class="endpoint-description">Ajouter une cote pour un étudiant</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <div class="container">
          <div class="footer-content">
            <h3>API de Préinscription</h3>
            <div class="footer-links">
              <a href="/api-docs">Documentation</a>
              <a href="https://github.com/babimumba/service-inscription">GitHub</a>
              <a href="mailto:babimumba243@gmail.com">Contact</a>
            </div>
            <p class="copyright">© ${new Date().getFullYear()} Babi Mumba. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </body>
    </html>
  `);
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
        url: process.env.NODE_ENV === 'production' 
          ? 'https://service-inscription.vercel.app' 
          : 'http://localhost:3000',
        description: process.env.NODE_ENV === 'production' ? 'Serveur de production' : 'Serveur de développement'
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
const CSS_URL = "https://cdn.jsdelivr.net/npm/swagger-ui-dist@latest/swagger-ui.css";

// Utiliser swagger-ui-express pour exposer la documentation Swagger à /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customCssUrl: CSS_URL,
  customSiteTitle: "API de préinscription - Documentation",
  customfavIcon: "/favicon.ico"
}));
