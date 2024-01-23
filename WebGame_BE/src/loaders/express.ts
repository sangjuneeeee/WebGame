import express from "express";
import routes from "../api/routes";
import authMiddleware from "../api/middlewares/authMiddleware";

export default () => {
  const app = express();

  app.use(express.json());
  app.use(authMiddleware);
  app.use("/api", routes);

  return app;
};
