const {
  unauthorizedResponse,
  sessionExpired,
} = require("../constants/responses");

const TokenService = require("../services/tokenService");
const tokenService = new TokenService(process.env.JWT_SECRET_KEY);

const verifyAuthentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let accessToken;

  if (authHeader) {
    accessToken = authHeader.split(" ")[1];
    if (!accessToken){
      accessToken = authHeader;
    }
  }

  console.log(authHeader , "accesstoken")

  if (!accessToken) {
    const response = unauthorizedResponse("Unauthorized");
    return res.status(response.status.code).json(response);
  }

  const data = tokenService.verifyAccessToken(accessToken);

  if (!data) {
    const response = sessionExpired("Unauthorized.");
    return res.status(response.status.code).json(response);
  }

  req.adminId = data;
  next();
};

module.exports = verifyAuthentication;
