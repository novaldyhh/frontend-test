const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "T_KATALOG_KARYAWAN",
  {
    ID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    NIK: { type: Sequelize.STRING },
    FullName: { type: Sequelize.STRING },
    Divisi: { type: Sequelize.STRING },
    TglJoin: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    TglModifikasi: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    TglRegistrasi: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    TglLahir: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    NoKTP: { type: Sequelize.STRING },
    StatusNikah: { type: Sequelize.STRING },
    Gaji: { type: Sequelize.STRING },
    TunjanganTetap: { type: Sequelize.STRING },
    TunjanganTdkTetap: { type: Sequelize.STRING },
    JnsKelamin: { type: Sequelize.STRING },
  },
  { timestamp: false }
);
