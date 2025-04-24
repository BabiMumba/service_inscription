const express = require('express');
const router = express.Router();
const preinscriptionController = require('../controllers/preinscription.controller');

router.post('/', preinscriptionController.createPreinscription);

module.exports = router;
