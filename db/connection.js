const { Sequelize } = require("sequelize");
const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
} = require("../config/config");

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

(async function () {
  try {
    await connection.authenticate();
    console.log("[i] connected to DB successful.");
  } catch (error) {
    console.error("[-] DB connection > ", error.message);
    process.exit(1);
  }
})();

module.exports = connection;
