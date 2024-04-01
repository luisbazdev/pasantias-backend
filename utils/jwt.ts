const jwt = require("jsonwebtoken");

export const JWTSignToken = async function (payload: any) {
    try {
      const asyncToken = await jwt.sign(
        payload,
        "privateKey",
        {
          algorithm: "HS256",
          expiresIn: "24h",
        }
      );
      return asyncToken;
    } catch (err) {
      return null;
    }
  };