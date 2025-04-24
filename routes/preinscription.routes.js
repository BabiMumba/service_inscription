const express = require('express');
const router = express.Router();
const preinscriptionController = require('../controllers/preinscription.controller');

// Route pour créer une préinscription
router.post('/', preinscriptionController.createPreinscription);

module.exports = router;
