import type { Request, Response } from "express";
import { UserService } from "../services/UserService.js";

const userServices = new UserService();

class UserController {
    async create(req: Request, res: Response) {
        try {
            const { name, email, phone } = req.body;

            if (!name || !email) {
                throw new Error("Todos esses campos devem ser preenchidos!");
            }

            const newUser = await userServices.newUser({ name, email, phone });

            res.status(201).json(newUser);

        } catch (error: any) {
            res.status(400).json({ message: error.message || "Erro interno" });
        }
    }

    async getAll(req: Request, res: Response) {
        const response = await userServices.users();

        if (!response || response.length == 0) {
            return res.status(404).json({ error: "Nenhum usuário cadastrado no sistema." });
        }

        return res.json(response)
    }

    async getByID(req: Request, res: Response) {
        try {
            const { userID } = req.params;

            if (!userID) {
                return res.status(400).json({
                    error: "O parâmetro ID é obrigatório."
                });
            }

            const response = await userServices.findUserID(userID as string);

            if (!response) {
                return res.status(404).json({
                    error: "O ID informado não está vinculado a nenhum usuário cadastrado no sistema."
                });
            }

            return res.json(response);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno no servidor" });
        }


    }

    async getByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;

            if (!email) {
                return res.status(400).json({
                    error: "O parâmetro e-mail é obrigatório."
                });
            }

            const response = await userServices.findUserEmail(email as string);

            if (!response) {
                return res.status(404).json({
                    error: "O e-mail informado não está vinculado a nenhum usuário cadastrado no sistema."
                });
            }

            return res.json(response);
        } catch (error) {
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { userID } = req.params;
            const { name, email, phone } = req.body;

            const data = {
                name, email, phone
            }

            const userUpdate = await userServices.updateUser(userID as string, data);

            return res.json(userUpdate);

        } catch (error) {
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    async delete(req: Request, res: Response) {
        const { userID } = req.params;
        const response = await userServices.deleteUser(userID as string);
        return res.json(response)
    }


}

export { UserController };