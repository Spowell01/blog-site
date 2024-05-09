const Sequelize = require("sequelize");
// import sensitive data from .env file
require("dotenv").config();

const sequelize = process.env.JAWDB_URL
  ? // heroku
    new Sequelize(process.env.JAWDB_URL)
  : // local
    new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );
