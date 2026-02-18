import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "Token não fornecido" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decoded.id,
            role: decoded.role
        };
        next();
    }
    catch (err) {
        return res.status(403).json({ message: "Token inválido ou expirado" });
    }
};
export { verifyToken };
//# sourceMappingURL=verifyRoles.js.map