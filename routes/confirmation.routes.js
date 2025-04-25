const express = require('express');
const router = express.Router();
const confirmationController = require('../controllers/confirmation.controller');

router.post('/', confirmationController.confirmerAdmission);
router.get('/', confirmationController.getAllConfirmations);

module.exports = router;
