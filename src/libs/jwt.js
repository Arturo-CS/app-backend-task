import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => { //Una función callback puede ser envuelta por promise. esto es recomendable porque estoy trabajando con async y await
    jwt.sign(
      payload,
      "xyz123",
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};