const jwt = require("jsonwebtoken");

class TokenService {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  generateAccessToken(user) {
    return jwt.sign({ user }, this.secretKey, { expiresIn: "7d" });
  }

  generateRefreshToken(user) {
    return jwt.sign({ user }, this.secretKey, { expiresIn: "30d" });
  }

  verifyAccessToken(accessToken) {
    try {
      const decoded = jwt.verify(accessToken, "6ad2a9288856c090b7bb694a3448582b4e59f14486a1cae919b012d84e4ee209");
      return decoded.user;
    } catch (error) {
      return null;
    }
  }

  refreshAccessToken(refreshToken) {
    try {
      const decoded = jwt.verify(refreshToken, this.secretKey);
      const user = decoded.user;
      return this.generateAccessToken(user);
    } catch (error) {
      return null;
    }
  }
}

module.exports = TokenService;
