// routes/cote.routes.js
const express = require('express');
const router = express.Router();
const coteController = require('../controllers/cote.controller');

/**
 * @swagger
 * /cotes:
 *   post:
 *     summary: Ajouter une cote
 *     description: Permet d'ajouter une nouvelle cote pour un étudiant
 *     tags: [Cotes]
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
 *               - matiere
 *               - note
 *             properties:
 *               preinscription_id:
 *                 type: string
 *                 description: ID de la préinscription de l'étudiant
 *               matiere:
 *                 type: string
 *                 description: Nom de la matière
 *               note:
 *                 type: number
 *                 description: Note obtenue (sur 20)
 *               coefficient:
 *                 type: number
 *                 description: Coefficient de la matière
 *               commentaires:
 *                 type: string
 *                 description: Commentaires sur la note
 *     responses:
 *       201:
 *         description: Cote ajoutée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cote ajoutée avec succès
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     preinscription_id:
 *                       type: string
 *                     matiere:
 *                       type: string
 *                     note:
 *                       type: number
 *                     coefficient:
 *                       type: number
 *       400:
 *         description: Données invalides ou manquantes
 *       401:
 *         description: Non autorisé - Token JWT invalide ou manquant
 *       500:
 *         description: Erreur serveur
 */
router.post('/', coteController.ajouterCote);

/**
 * @swagger
 * /cotes/{preinscription_id}:
 *   get:
 *     summary: Lister les cotes d'un étudiant
 *     description: Récupère toutes les cotes d'un étudiant spécifique
 *     tags: [Cotes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: preinscription_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la préinscription de l'étudiant
 *     responses:
 *       200:
 *         description: Liste des cotes récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   matiere:
 *                     type: string
 *                   note:
 *                     type: number
 *                   coefficient:
 *                     type: number
 *                   date_ajout:
 *                     type: string
 *       401:
 *         description: Non autorisé - Token JWT invalide ou manquant
 *       404:
 *         description: Étudiant non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:preinscription_id', coteController.listerCotes);

module.exports = router;
