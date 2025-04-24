const db = require('../database/db');

exports.createPreinscription = (req, res) => {
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
        res.status(201).json({
          message: 'Préinscription reçue 📩',
          data: { nom, prenom, email, telephone }
        });
        console.log('✅ Préinscription insérée avec succès pour :', nom, prenom);

      }
    );
  };
  