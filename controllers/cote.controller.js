// controllers/cote.controller.js
const db = require('../database/db');

// ➕ Ajouter une cote
exports.ajouterCote = (req, res) => {
  const { preinscription_id, cours, cote } = req.body;

  const sql = `
    INSERT INTO cotes (preinscription_id, cours, cote)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [preinscription_id, cours, cote], (err, result) => {
    if (err) {
      console.error("Erreur ajout cote 😵:", err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }

    res.status(201).json({
      message: 'Cote ajoutée avec succès ✅',
      id: result.insertId
    });
  });
};

// 📄 Lister les cotes d’un étudiant
exports.listerCotes = (req, res) => {
  const { preinscription_id } = req.params;

  const sql = `
    SELECT cours, cote, date_enregistrement 
    FROM cotes 
    WHERE preinscription_id = ?
  `;

  db.query(sql, [preinscription_id], (err, results) => {
    if (err) {
      console.error("Erreur récupération cotes 😬:", err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }

    res.status(200).json({
      message: 'Liste des cotes récupérée 📋',
      cotes: results
    });
  });
};
