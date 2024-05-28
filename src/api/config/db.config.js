module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "root", // PASSWORD: "thabrez",
    DB: "dist",
    PORT: 5432,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
