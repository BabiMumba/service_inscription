const express = require('express');
const router = express.Router();
const paiementController = require('../controllers/paiement.controller');

/**
 * @swagger
 * /paiements:
 *   post:
 *     summary: Enregistrer un paiement
 *     description: Permet d'enregistrer un nouveau paiement pour une préinscription
 *     tags: [Paiements]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - preinscription_id
 *               - montant
 *               - mode_paiement
 *             properties:
 *               preinscription_id:
 *                 type: string
 *                 description: ID de la préinscription associée au paiement
 *               montant:
 *                 type: number
 *                 description: Montant du paiement
 *               mode_paiement:
 *                 type: string
 *                 enum: [CASH, CARTE, VIREMENT, MOBILE_MONEY]
 *                 description: Mode de paiement utilisé
 *               reference:
 *                 type: string
 *                 description: Référence du paiement (numéro de transaction)
 *               date_paiement:
 *                 type: string
 *                 format: date-time
 *                 description: Date et heure du paiement
 *     responses:
 *       201:
 *         description: Paiement enregistré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Paiement enregistré avec succès
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     preinscription_id:
 *                       type: string
 *                     montant:
 *                       type: number
 *                     mode_paiement:
 *                       type: string
 *                     date_paiement:
 *                       type: string
 *       400:
 *         description: Données invalides ou manquantes
 *       401:
 *         description: Non autorisé - Token JWT invalide ou manquant
 *       500:
 *         description: Erreur serveur
 */
router.post('/', paiementController.enregistrerPaiement);

module.exports = router;
