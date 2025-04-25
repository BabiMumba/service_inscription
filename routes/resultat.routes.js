const express = require('express');
const router = express.Router();
const resultatController = require('../controllers/resultat.controller');

/**
 * @swagger
 * /resultats/selection:
 *   post:
 *     summary: Sélectionner un candidat
 *     description: Permet de sélectionner un candidat pour l'admission
 *     tags: [Résultats]
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
 *               - statut
 *             properties:
 *               preinscription_id:
 *                 type: string
 *                 description: ID de la préinscription du candidat
 *               statut:
 *                 type: string
 *                 enum: [ADMIS, REFUSE, EN_ATTENTE]
 *                 description: Statut de sélection du candidat
 *               commentaires:
 *                 type: string
 *                 description: Commentaires sur la sélection
 *     responses:
 *       200:
 *         description: Candidat sélectionné avec succès
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
router.post('/selection', resultatController.selectionnerCandidat);

/**
 * @swagger
 * /resultats:
 *   get:
 *     summary: Obtenir tous les résultats
 *     description: Récupère la liste de tous les résultats
 *     tags: [Résultats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des résultats récupérée avec succès
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
 *                   statut:
 *                     type: string
 *                   date_selection:
 *                     type: string
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
router.get('/', resultatController.getAllResultats);

/**
 * @swagger
 * /resultats/admis:
 *   get:
 *     summary: Obtenir les candidats admis
 *     description: Récupère la liste des candidats admis
 *     tags: [Résultats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des admis récupérée avec succès
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
 *                   date_selection:
 *                     type: string
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
router.get('/admis', resultatController.getAdmis);

/**
 * @swagger
 * /resultats/{id}:
 *   get:
 *     summary: Obtenir un résultat par ID
 *     description: Récupère les détails d'un résultat spécifique
 *     tags: [Résultats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du résultat
 *     responses:
 *       200:
 *         description: Résultat récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 preinscription_id:
 *                   type: string
 *                 statut:
 *                   type: string
 *                 date_selection:
 *                   type: string
 *       404:
 *         description: Résultat non trouvé
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', resultatController.getResultatById);

module.exports = router;
