const jwt = require("jsonwebtoken");

export const JWTSignToken = async function (payload: any) {
    try {
      const asyncToken = await jwt.sign(
        payload,
        process.env.SECRET_KEY,
        {
          algorithm: "HS256",
          expiresIn: "1y",
        }
      );
      return asyncToken;
    } catch (err) {
      return null;
    }
  };