const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  // const sequelize = new Sequelize('postgres://postgres:root@localhost:5433/dist') // Example for postgres


  const testDbConnection = async () => {
      try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database INTERNAL ERROR:", error);
      }
    };

    testDbConnection();

module.exports = {sequelize , testDbConnection};