const express = require('express');
const router = express.Router();
const preinscriptionController = require('../controllers/preinscription.controller');

router.post('/', preinscriptionController.createPreinscription);

module.exports = router;


/**
 * @swagger
 * /preinscriptions:
 *   post:
 *     summary: Créer une nouvelle préinscription
 *     description: Permet de préinscrire un étudiant avec ses informations personnelles et documents nécessaires.
 *     tags: [Préinscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Le nom de l'étudiant.
 *               prenom:
 *                 type: string
 *                 description: Le prénom de l'étudiant.
 *               email:
 *                 type: string
 *                 description: L'adresse email de l'étudiant.
 *               telephone:
 *                 type: string
 *                 description: Le numéro de téléphone de l'étudiant.
 *               lettre_demande:
 *                 type: string
 *                 description: L'URL de la lettre de demande d'inscription.
 *               photo_url:
 *                 type: string
 *                 description: L'URL de la photo de l'étudiant.
 *               certificat_url:
 *                 type: string
 *                 description: L'URL du certificat ou du journal certifié.
 *               carte_identite_url:
 *                 type: string
 *                 description: L'URL de la carte d'identité ou de l'électeur.
 *     responses:
 *       201:
 *         description: Préinscription réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     nom:
 *                       type: string
 *                     prenom:
 *                       type: string
 *                     email:
 *                       type: string
 *                     telephone:
 *                       type: string
 *       500:
 *         description: Erreur serveur
 *       400:
 *         description: Données manquantes ou incorrectes
 */
