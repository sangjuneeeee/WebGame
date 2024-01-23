import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// 'Request' 객체에 'user' 속성 추가
interface RequestWithUser extends Request {
  user?: jwt.JwtPayload;
}

export default (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = <jwt.JwtPayload>jwt.verify(token, "your-secret-key");
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
