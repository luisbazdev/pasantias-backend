const jwt = require("jsonwebtoken");

export const authMiddleware = async function(req: any, res: any, next: any) {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ mensaje: "No tienes permisos para realizar esta accion." });
    }

    try {
        jwt.verify(token, process.env.SECRET_KEY);
        return next();
    } catch (error) {
        return res.status(401).json({ mensaje: "Token invalido." });
    }
}
