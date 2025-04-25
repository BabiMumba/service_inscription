const express = require('express');
const router = express.Router();
const paiementController = require('../controllers/paiement.controller');

router.post('/', paiementController.enregistrerPaiement);

module.exports = router;
