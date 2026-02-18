import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { s3Upload } from "../configs/awsConfig.js";
const userRoutes = Router();
const userController = new UserController();
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               document:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [ADMIN, CLIENT]
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro de validação
 */
userRoutes.post('/users', s3Upload.single('image'), async (req, res) => {
    return await userController.create(req, res);
});
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Listar todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRoutes.get('/users', userController.getAll.bind(userController));
/**
 * @swagger
 * /users/{userID}:
 *   get:
 *     summary: Buscar usuário por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
userRoutes.get('/users/:userID', async (req, res) => {
    return await userController.getByID(req, res);
});
userRoutes.get('/users/email/:email', async (req, res) => {
    return await userController.getByEmail(req, res);
});
/**
 * @swagger
 * /users/{userID}:
 *   put:
 *     summary: Atualizar usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *       404:
 *         description: Usuário não encontrado
 */
userRoutes.put('/users/:userID', async (req, res) => {
    return await userController.update(req, res);
});
/**
 * @swagger
 * /users/{userID}:
 *   delete:
 *     summary: Deletar usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
userRoutes.delete('/users/:userID', async (req, res) => {
    return await userController.delete(req, res);
});
export { userRoutes };
//# sourceMappingURL=User.route.js.map