import { Model, DataTypes } from "sequelize";
import { sequelize } from "../loaders/sequelize";

class User extends Model {
  public id!: number;
  public username!: string;
  public hashedPassword!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    hashedPassword: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize: sequelize,
  }
);

export default User;
