const express = require('express');
const router = express.Router();
const confirmationController = require('../controllers/confirmation.controller');

/**
 * @swagger
 * /confirmations:
 *   post:
 *     summary: Confirmer une admission
 *     description: Permet de confirmer l'admission d'un étudiant
 *     tags: [Confirmations]
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
 *               - resultat_id
 *             properties:
 *               preinscription_id:
 *                 type: string
 *                 description: ID de la préinscription de l'étudiant
 *               resultat_id:
 *                 type: string
 *                 description: ID du résultat d'admission
 *               date_confirmation:
 *                 type: string
 *                 format: date-time
 *                 description: Date et heure de la confirmation
 *               commentaires:
 *                 type: string
 *                 description: Commentaires sur la confirmation
 *     responses:
 *       201:
 *         description: Admission confirmée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Admission confirmée avec succès
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     preinscription_id:
 *                       type: string
 *                     resultat_id:
 *                       type: string
 *                     date_confirmation:
 *                       type: string
 *       400:
 *         description: Données invalides ou manquantes
 *       401:
 *         description: Non autorisé - Token JWT invalide ou manquant
 *       500:
 *         description: Erreur serveur
 */
router.post('/', confirmationController.confirmerAdmission);

/**
 * @swagger
 * /confirmations:
 *   get:
 *     summary: Obtenir toutes les confirmations
 *     description: Récupère la liste de toutes les confirmations d'admission
 *     tags: [Confirmations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des confirmations récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   preinscription_id:
 *                     type: string
 *                   resultat_id:
 *                     type: string
 *                   date_confirmation:
 *                     type: string
 *       401:
 *         description: Non autorisé - Token JWT invalide ou manquant
 *       500:
 *         description: Erreur serveur
 */
router.get('/', confirmationController.getAllConfirmations);

module.exports = router;
