/**
 * @swagger
 * tags:
 *   name: Assets
 *   description: The assets managing API
 *
 * components:
 *   schemas:
 *     Asset:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the asset
 *         name:
 *           type: string
 *           description: Name of the asset
 *         description:
 *           type: string
 *           description: Description of the asset
 *
 * /assets:
 *   post:
 *     summary: Create a new asset
 *     tags: [Assets]
 *     requestBody:
 *       description: Asset data to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Asset'
 *     responses:
 *       200:
 *         description: Successful response with created asset
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error
 *   get:
 *     summary: Get all assets
 *     tags: [Assets]
 *     responses:
 *       200:
 *         description: Successful response with the list of assets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Asset'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error
 *
 * /assets/{id}:
 *   get:
 *     summary: Get an asset by ID
 *     tags: [Assets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the asset to retrieve
 *     responses:
 *       200:
 *         description: Successful response with the asset
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       404:
 *         description: Asset not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error
 *   delete:
 *     summary: Delete an asset by ID
 *     tags: [Assets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the asset to delete
 *     responses:
 *       200:
 *         description: Successful response after deleting the asset
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *       404:
 *         description: Asset not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error
 */
