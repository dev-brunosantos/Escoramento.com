import { prisma } from "../configs/prisma.js";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
class LoginController {
    async login(req, res) {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Senha inválida" });
        }
        const token = jwt.sign({
            id: user.id,
            role: user.role
        }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return res.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                image: user.image
            },
            token
        });
    }
}
export { LoginController };
//# sourceMappingURL=LoginController.js.map