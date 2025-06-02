import jwt from 'jsonwebtoken';
const auth = () => {
    return (req, res, next) => {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        try {
            const decoded = jwt.verify(token, 'secretKey');
            if (decoded.role != 'admin') {
                return res.status(403).json({ message: "Not authorized" });
            }
            req.id = decoded.id;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
    }
};
export default auth;
