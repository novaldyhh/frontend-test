const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "T_KATALOG_DIVISI",
  {
    ID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    Divisi: { type: Sequelize.STRING },
    IsActive: { type: Sequelize.STRING },
  },
  { timestamp: false }
);
