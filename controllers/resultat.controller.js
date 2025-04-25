const db = require('../database/db');

// Sélectionner un candidat et calculer sa moyenne
exports.selectionnerCandidat = (req, res) => {
  const { preinscription_id } = req.body;

  const sqlGet = `
    SELECT math, francais, psychotechnique 
    FROM tests_admission 
    WHERE preinscription_id = ?
  `;

  db.query(sqlGet, [preinscription_id], (err, results) => {
    if (err) {
      console.error('Erreur récupération des notes 😵', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Aucun test trouvé pour ce candidat 🙅‍♂️' });
    }

    const { math, francais, psychotechnique } = results[0];
    const moyenne = ((math + francais + psychotechnique) / 3).toFixed(2);
    const statut = moyenne >= 50 ? 'admis' : 'ajourné';

    const sqlInsert = `
      INSERT INTO resultats (preinscription_id, moyenne, statut)
      VALUES (?, ?, ?)
    `;

    db.query(sqlInsert, [preinscription_id, moyenne, statut], (err2, result2) => {
      if (err2) {
        console.error('Erreur insertion du résultat final 😬', err2);
        return res.status(500).json({ message: 'Erreur lors de l’enregistrement du résultat' });
      }

      res.status(201).json({
        message: `Résultat enregistré avec succès ✅`,
        moyenne,
        statut
      });
    });
  });
};

// Récupérer tous les résultats
exports.getAllResultats = (req, res) => {
  const sql = `
    SELECT p.nom, p.prenom, r.moyenne, r.statut 
    FROM resultats r 
    JOIN preinscriptions p ON r.preinscription_id = p.id
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur récupération des résultats 🧨', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
};

// Récupérer uniquement les admis
exports.getAdmis = (req, res) => {
  const sql = `
    SELECT p.nom, p.prenom, r.moyenne, r.statut 
    FROM resultats r 
    JOIN preinscriptions p ON r.preinscription_id = p.id
    WHERE r.statut = 'admis'
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur récupération des admis 📛', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
};

// Récupérer les résultats d’un candidat précis
exports.getResultatById = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT p.nom, p.prenom, r.moyenne, r.statut 
    FROM resultats r 
    JOIN preinscriptions p ON r.preinscription_id = p.id
    WHERE r.preinscription_id = ?
  `;

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Erreur récupération résultat spécifique 🧐', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Aucun résultat trouvé 🕵️‍♂️' });
    }

    res.json(results[0]);
  });
};
