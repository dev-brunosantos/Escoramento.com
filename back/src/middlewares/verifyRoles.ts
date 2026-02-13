import { type NextFunction, type Request, type Response } from "express";

export const verifyRoles = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if(!user || user.role !== "ADMIN") {
        return res.status(403).json({
            message: "Acesso negado! Você precisa de privilégios de administrador."
        })
    }

    next();
}