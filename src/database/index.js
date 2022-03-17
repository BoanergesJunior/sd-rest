import { Sequelize } from "sequelize";

export default new Sequelize(
  'postgres://postgres@localhost:5432/sd-db',
  { dialect: 'postgres' }
);