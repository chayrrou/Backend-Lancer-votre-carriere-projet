const { Sequelize, DataTypes, Model } = require('sequelize');
const DB_URI = process.env.DB_URI;

const Seq =  new Sequelize("mysql://root:@127.0.0.1:3306/stageprojet", {
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});



module.exports = Seq;