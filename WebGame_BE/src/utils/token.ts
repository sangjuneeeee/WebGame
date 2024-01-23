import jwt from "jsonwebtoken";

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, "your-secret-key");
};
