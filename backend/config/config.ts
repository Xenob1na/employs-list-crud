import { Sequelize } from "sequelize-typescript";
import { Employ } from "../models/employ.model";

import 'dotenv/config'

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: true,
  models: [Employ],
});

export default connection;
