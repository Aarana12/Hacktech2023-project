module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "@Binkey63",
    DB: "hacktech",
    dialect: "mysql",
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };