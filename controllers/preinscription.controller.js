exports.createPreinscription = (req, res) => {
    const {
      nom,
      prenom,
      email,
      telephone,
      documents
    } = req.body;
  
    // Pour l’instant on affiche juste les données
    console.log('Nouvelle préinscription reçue:', req.body);
  
    res.status(201).json({
      message: 'Préinscription reçue 📩',
      data: { nom, prenom, email, telephone, documents }
    });
  };
  