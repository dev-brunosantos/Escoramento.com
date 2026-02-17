import express, { type Request, type Response } from "express";
import cors from "cors";
import { routes } from "./routes/routes.js";
import { LoginController } from "./controllers/LoginController.js";

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes.userRoutes);

const loginController = new LoginController();

app.post('/login', async (req: Request, res: Response) => {
    await loginController.login(req, res);
})


export { app };