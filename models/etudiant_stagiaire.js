const { DataTypes } = require("sequelize");
const sequelize = require("../Config/database");



const Etudiant_stagiaire = sequelize.define(
    "Etudiant_stagiaire",
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
      Prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CV: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      , Lettre: {
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
      modelName: "Etudiant_stagiaire", // We need to choose the model name
      freezeTableName: true,
    }
  );
  
 

  
  
  module.exports = Etudiant_stagiaire;
  //////////////////////////////////////////////////////////////////////////////////////////////////////