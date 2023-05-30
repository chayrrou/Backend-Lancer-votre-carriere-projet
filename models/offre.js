const { DataTypes } = require("sequelize");
const sequelize = require("../Config/database");



const Offre = sequelize.define(
    "Offre",
    {
      // Model attributes are defined here
      Titre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DatePublication: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Salaire: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      RoleCondidat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Admissibilite: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Prossesus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Logistique: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
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
      modelName: "Offre", // We need to choose the model name
      freezeTableName: true,
    }
  );
  
 

  
  
  module.exports = Offre;
  //////////////////////////////////////////////////////////////////////////////////////////////////////