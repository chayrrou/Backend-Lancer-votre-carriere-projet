const { DataTypes } = require("sequelize");
const sequelize = require("../Config/database");



const Societe = sequelize.define(
    "Societe",
    {
      // Model attributes are defined here
      Nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Adresse: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Activite: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Logo: {
        type: DataTypes.STRING,
        allowNull: false,
      }, role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    
    {
      // Other model options go here
      // Other model options go here
      paranoid: true,
      sequelize, // We need to pass the connection instance
      modelName: "Societe", // We need to choose the model name
      freezeTableName: true,
    }
  );
  
 

  
  
  module.exports = Societe;
  //////////////////////////////////////////////////////////////////////////////////////////////////////