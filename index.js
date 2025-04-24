const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./database/db');

const app = express();
const PORT = process.env.PORT || 3000;
const preinscriptionRoutes = require('./routes/preinscription.routes');

app.use(cors());
app.use(express.json());
app.post('/preinscription', (req, res) => {
    const {
      nom,
      prenom,
      email,
      telephone,
      lettre_demande,
      photo_url,
      certificat_url,
      carte_identite_url
    } = req.body;
  
    const sql = `
      INSERT INTO preinscriptions 
      (nom, prenom, email, telephone, lettre_demande, photo_url, certificat_url, carte_identite_url) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  
    db.query(
      sql,
      [nom, prenom, email, telephone, lettre_demande, photo_url, certificat_url, carte_identite_url],
      (err, result) => {
        if (err) {
          console.error('Erreur lors de l\'insertion 🧨:', err);
          return res.status(500).json({ message: 'Erreur serveur 😢' });
        }
        res.status(201).json({ message: 'Préinscription enregistrée 🎉', id: result.insertId });
      }
    );
  });
  

app.use('/preinscriptions', preinscriptionRoutes);

app.get('/', (req, res) => {
  res.send('Service d’inscription en ligne 📚🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
