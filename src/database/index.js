import { Sequelize } from "sequelize";
import dbConfig from "../config/database.js";

export default new Sequelize(dbConfig);
