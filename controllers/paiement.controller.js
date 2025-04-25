const db = require('../database/db');

exports.enregistrerPaiement = (req, res) => {
  const { preinscription_id, montant, methode_paiement, date_paiement } = req.body;

  const sql = `
    INSERT INTO paiements (preinscription_id, montant, methode_paiement, date_paiement)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [preinscription_id, montant, methode_paiement, date_paiement], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'enregistrement du paiement 🧨:', err);
      return res.status(500).json({ message: 'Erreur serveur lors du paiement 😢' });
    }

    res.status(201).json({
      message: 'Paiement enregistré avec succès 💸✅',
      paiementId: result.insertId
    });
    console.log('✅ Paiement enregistré avec succès pour la préinscription ID:', preinscription_id);
  });
};
