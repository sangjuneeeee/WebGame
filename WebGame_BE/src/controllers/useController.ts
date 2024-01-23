import { Request, Response } from "express";
import * as userService from "../services/userService";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await userService.register(username, password);
    res.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const token = await userService.login(username, password);
    res.status(200).json({ token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};
