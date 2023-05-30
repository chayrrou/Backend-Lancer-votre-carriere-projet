/*const Seq = require('./database.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(Seq.database, Seq.Nom, Seq.Password, {
  host: Seq.host,
  dialect: "mysql",
  operatorsAliases: false,
 
  pool: {
    max: Seq.max,
    min: Seq.min,
    acquire: Seq.acquire,
    idle: Seq.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('../models/user.js')(sequelize, Sequelize);
db.role = require('../models/role.js')(sequelize, Sequelize);
 
db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});

module.exports = db; */