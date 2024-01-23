import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// dotenv.config({ debug: true }); 설정 해놓으면 어느 환경 변수가 이미 설정되어 있었는지 쉽게 알아 낼 수 있음
dotenv.config();

if (
  !process.env.DB_NAME ||
  !process.env.DB_USER ||
  !process.env.DB_PASS ||
  !process.env.DB_HOST
) {
  throw new Error("환경 변수가 설정되지 않았습니다!");
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

export { sequelize };
