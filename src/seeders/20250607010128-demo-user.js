'use strict';
const md5 = require('md5')
//Import the md5 library, and only put md5("the password"),
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: "Jorge Alejandro",
        lastName: "Fernandez Perez",
        email: "Jorge@gmail.com",
        password: md5("password1"),
        role: "instructor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Susana",
        lastName: "Hernández Parera",
        email: "Susana@gmail.com",
        password: md5("password2"),
        role: "instructor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Luis Daniel",
        lastName: "Tasis Fernandez",
        email: "Luis@gmail.com",
        role: 'student',
        password: md5("password3"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Ricardo",
        lastName: "Hernández",
        email: "Ricardoo@gmail.com",
        password: md5("password4"),
        role: "instructor",
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        firstName: "Sabina Sonia",
        lastName: "Parera Quesada",
        email: "Sonia@gmail.com",
        password: md5("password5"),
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jans",
        lastName: "Hernández Parera",
        email: "Jans@gmail.com",
        password: md5("password6"),
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Solans",
        lastName: " Tasis Hernández",
        email: "Solans@gmail.com",
        password: md5("password7"),
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    //This is for delete the table
    return queryInterface.bulkDelete('Users', null, {});
  },
};
