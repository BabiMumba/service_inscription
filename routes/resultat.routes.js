const express = require('express');
const router = express.Router();
const resultatController = require('../controllers/resultat.controller');

router.post('/selection', resultatController.selectionnerCandidat);
router.get('/', resultatController.getAllResultats);
router.get('/admis', resultatController.getAdmis);
router.get('/:id', resultatController.getResultatById);

module.exports = router;
