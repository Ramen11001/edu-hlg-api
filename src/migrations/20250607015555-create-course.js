'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mode: {
        type: Sequelize.ENUM("in-person", "virtual", "hybrid"),
        allowNull: false,
      },
      area: {
        type: Sequelize.ENUM("technique", "humanities", "health"),
        allowNull: false,
      },
      level:{
        type: Sequelize.ENUM("beginner", "intermediate", "advanced"),
         allowNull: false,
      },
      teacher: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modules: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      duration: {
        type: Sequelize.ENUM("hours", "weeks", "months"),
        allowNull: false,
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      certificate: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
         allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};