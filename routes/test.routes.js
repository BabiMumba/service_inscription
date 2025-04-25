const express = require('express');
const router = express.Router();
const testController = require('../controllers/test.controller');

/**
 * @swagger
 * /tests:
 *   post:
 *     summary: Enregistrer les résultats d'un test
 *     description: Permet d'enregistrer les résultats d'un test pour un étudiant
 *     tags: [Tests]
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
 *               - score
 *               - date_test
 *             properties:
 *               preinscription_id:
 *                 type: string
 *                 description: ID de la préinscription de l'étudiant
 *               score:
 *                 type: number
 *                 description: Score obtenu au test
 *               date_test:
 *                 type: string
 *                 format: date
 *                 description: Date à laquelle le test a été passé
 *               commentaires:
 *                 type: string
 *                 description: Commentaires optionnels sur le test
 *     responses:
 *       201:
 *         description: Résultats du test enregistrés avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Résultats du test enregistrés avec succès
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     preinscription_id:
 *                       type: string
 *                     score:
 *                       type: number
 *                     date_test:
 *                       type: string
 *       400:
 *         description: Données invalides ou manquantes
 *       401:
 *         description: Non autorisé - Token JWT invalide ou manquant
 *       500:
 *         description: Erreur serveur
 */
router.post('/', testController.enregistrerResultatsTest);

module.exports = router;
