import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
configDotenv()

const sequelize = new Sequelize(process.env.DATA_BASE, process.env.USER, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize