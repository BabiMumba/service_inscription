const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./database/db');

const app = express();
const PORT = process.env.PORT || 3000;
const preinscriptionRoutes = require('./routes/preinscription.routes');
const resultatRoutes = require('./routes/resultat.routes');
const paiementRoutes = require('./routes/paiement.routes');
const confirmationRoutes = require('./routes/confirmation.routes');
const testRoutes = require('./routes/test.routes');

app.use(cors());
app.use(express.json());

app.use('/preinscriptions', preinscriptionRoutes);
app.use('/resultats', resultatRoutes);
app.use('/paiements', paiementRoutes);
app.use('/confirmations', confirmationRoutes);
app.use('/tests', testRoutes);


app.get('/', (req, res) => {
  res.send(
    '<h1>Bienvenue sur l\'API de préinscription !</h1><p>Utilisez les routes définies pour interagir avec l\'API.</p>'
  );
});

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
