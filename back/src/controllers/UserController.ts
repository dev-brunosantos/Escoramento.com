import type { Request, Response } from "express";
import { UserService } from "../services/UserService.js";
import { hash } from "bcrypt";

const userServices = new UserService();

class UserController {
    async create(req: Request, res: Response) {
        try {
            const {
                name, document, birthDate, email, password, phone,
            } = req.body;

            const file = req.file as any;
            const image = file ? file.location : undefined;
            const s3Key = file ? file.key : undefined;

            if (!name || !email) {
                throw new Error("Todos esses campos devem ser preenchidos!");
            }

            const passwordCriptografado = await hash(password, 10)

            const newUser = await userServices.newUser({
                name, document, birthDate, email, password: passwordCriptografado, 
                phone, image, s3Key, role: "CLIENT"
            });

            res.status(201).json(newUser);

        } catch (error: any) {
            res.status(400).json({ message: error.message || "Erro interno" });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const name =
                typeof req.query.name === "string"
                    ? req.query.name
                    : undefined;

            const role =
                typeof req.query.role === "string"
                    ? req.query.role
                    : undefined;

            const users = await userServices.usersParams(role, name);

            if (!users || users.length === 0) {
                return res.status(404).json({
                    error: "Nenhum usuário encontrado."
                });
            }

            return res.status(200).json(users);

        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar usuários"
            });
        }
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
            const {
                name, document, birthDate, 
                updatedAt, email, phone, role
            } = req.body;



            const file = req.file as any;

            const data: any = { 
                name, document, birthDate, 
                updatedAt, email, phone, role
             }

            if (file) {
                data.documents = file.location;
                data.s3Key = file.key;
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