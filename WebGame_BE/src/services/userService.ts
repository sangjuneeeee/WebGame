import User from "../models/user";
import { generateToken } from "../utils/token";
import bcrypt from "bcrypt";

export const register = async (username: string, password: string) => {
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    throw new Error("Username is already taken");
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await User.create({ username, hashedPassword });

  return user;
};

export const login = async (username: string, password: string) => {
  const user = await User.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.hashedPassword)) {
    throw new Error("Invalid username or password");
  }

  const token = generateToken(user.id);

  return token;
};
