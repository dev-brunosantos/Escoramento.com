import express, { type Request, type Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./configs/swagger.js";
import { routes } from "./routes/routes.js";
import { LoginController } from "./controllers/LoginController.js";

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes.userRoutes);

const loginController = new LoginController();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autenticação do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Credenciais inválidas
 */

app.post('/login', async (req: Request, res: Response) => {
    await loginController.login(req, res);
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


export { app };