const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');
const app = express();
const Role = require("./models");


const db = require('./models'); // import connexion object with models 
require('dotenv').config();






const etudiant_diplomeRoutes = require("./routes/etudiant_diplome");
const etudiant_stagiaireRoutes = require("./routes/etudiant_stagiaire");
const societeRoutes = require("./routes/societe");
const offreRoutes = require("./routes/offre");


// sync models and tables if there's changes
db.sequelize.sync({force:false}) 
.then(() => {
  console.log("Sync db if there's changes.");
})
.catch(err => console.log('Error in syncing db: ' + err.message));

// Test db                                          
db.sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Err ' + err) )






app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
  });
  app.use(bodyParser.json());




  app.use('/etudstag', etudiant_stagiaireRoutes);
  app.use('/etuddip', etudiant_diplomeRoutes);
  app.use('/societe', societeRoutes);
  app.use('/offre', offreRoutes);
  
  


app.listen(3000 , ()=>{
  console.log('conn')
})



module.exports = app;