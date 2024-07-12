const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw { message: 'Auth token is missing', code: 401 };
        }
        const decode = jwt.verify(authorization, process.env.JWT_KEY);
        next();
    } catch (error) {
        return res.status(401).send(error);
    }
};

module.exports = { verifyToken };