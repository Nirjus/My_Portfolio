
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../secret/secret");

const isAuthenticated = async (req, res, next) => {
try {
    const jwt_token = req.cookies.token;
  
    if(!jwt_token){
        return res.status(400).json({
            success: false,
            message: "Login to Access this resorces",
        })
    }

    const decoded = jwt.verify(jwt_token, jwtSecretKey);

    req.user = decoded.user;
   
    next();
} catch (error) {
    next(error);
}
}

module.exports = {
    isAuthenticated
}