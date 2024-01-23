import expressLoader from "./loaders/express";
import { sequelize } from "./loaders/sequelize";

const expressApp = expressLoader();

sequelize.sync().then(() => {
  expressApp.listen(3000, () => {
    console.log("The server is running on port 3000");
  });
});
