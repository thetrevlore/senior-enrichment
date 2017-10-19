const Sequelize = require('sequelize');
const db = require('../index')

const Student = db.define('student', {
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  campusId: { type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Student;