const db = require('../database/db');

exports.enregistrerResultatsTest = (req, res) => {
  const { preinscription_id, math, francais, psychotechnique, date_test } = req.body;

  const sql = `
    INSERT INTO tests_admission (preinscription_id, math, francais, psychotechnique, date_test)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [preinscription_id, math, francais, psychotechnique, date_test], (err, result) => {
    if (err) {
      console.error('Erreur insertion des résultats de test 🧨:', err);
      return res.status(500).json({ message: 'Erreur serveur lors des tests 😵' });
    }

    res.status(201).json({
      message: 'Résultats des tests enregistrés 📊✅',
      testId: result.insertId
    });
  });
};
