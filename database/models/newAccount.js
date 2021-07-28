const { DataTypes } = require('sequelize');
const { connection } = require('../index.js');
// const config = require('../../dbConfig.js');

// const connection = new Sequelize(`${config.DB_DB}`, `${config.DB_USER_NAME}`, `${config.DB_PW}`, {host: `${config.DB_HOST}`, port: `${config.DB_PORT}`, dialect: 'postgres'});

const Parent = connection.define('Parent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hear_about_us: {
    type: DataTypes.STRING,
  },
  child_count: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

const Children = connection.define('Children',{
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  grade: {
    type: DataTypes.STRING,
  },
  school: {
    type: DataTypes.STRING,
  },
  teachersEmail: {
    type: DataTypes.STRING,
  },
  teachersName:{
    type: DataTypes.STRING,
  },
  schoolDistrict: {
    type: DataTypes.STRING,
  },
  isOkayToEmailTeacher: {
    type: DataTypes.BOOLEAN,  
  },
  usernames: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  parentId: {
    type: DataTypes.INTEGER,
  }
})

Parent.hasMany(Children, {
  as: 'Children'
});
Children.belongsTo(Parent, {
  foreignKey: 'parentId',
  as: 'Parent'
})


//run `node database/models/newAccount.js` to create the tables in the `Learnatric` database (must be already created) *I use pgAdmin*
connection.sync()//forces a new creation even if these tables already exist.
.then((resp) => {
  console.log('postgres connection sync resp: ', resp)
  // connection.close(); //close connection on completion
})
.catch((err) => {
  console.log('postgres err', err)
})

module.exports = {Parent, Children}
