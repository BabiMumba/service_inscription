const db = require('../database/db');

// Confirmer une admission
exports.confirmerAdmission = (req, res) => {
  const { preinscription_id } = req.body;

  const sqlCheck = `SELECT statut FROM resultats WHERE preinscription_id = ?`;

  db.query(sqlCheck, [preinscription_id], (err, results) => {
    if (err) {
      console.error('Erreur vérification statut 😓', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }

    if (results.length === 0 || results[0].statut !== 'admis') {
      return res.status(403).json({ message: 'Le candidat n\'est pas admis 😢' });
    }

    const sqlInsert = `
      INSERT INTO confirmations (preinscription_id)
      VALUES (?)
    `;

    db.query(sqlInsert, [preinscription_id], (err2, result2) => {
      if (err2) {
        console.error('Erreur enregistrement confirmation 🤯', err2);
        return res.status(500).json({ message: 'Erreur lors de la confirmation' });
      }

      res.status(201).json({ message: 'Admission confirmée avec succès ✅' });
    });
  });
};

// Voir les confirmations
exports.getAllConfirmations = (req, res) => {
  const sql = `
    SELECT p.nom, p.prenom, c.date_confirmation, c.statut
    FROM confirmations c
    JOIN preinscriptions p ON c.preinscription_id = p.id
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur récupération confirmations 📛', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }

    res.json(results);
  });
};
