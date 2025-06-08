"use strict";

const { User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //For User
    async function getUserId() {
      const idUser = await User.findAll({
        attributes: ["id"],
      });
      return idUser;
    }
    const userIds = await getUserId();

    return queryInterface.bulkInsert("Courses", [
      {
        mode: "in-person",
        area: "technique",
        level: "beginner",
        teacher: "Dr. Susana Hernández",
        company: "Tech Academy",
        modules: ["Introduction", "Fundamentals", "Advanced Topics"],
        duration: "weeks",
        cost: 199.99,
        certificate: true,
        address: "123 Main Street",
        userId: userIds[1]?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mode: "virtual",
        area: "humanities",
        level: "intermediate",
        teacher: "Prof. Jorge Fernández",
        company: "Language Institute",
        modules: ["Grammar", "Writing Skills", "Literature"],
        duration: "months",
        cost: 149.99,
        certificate: true,
        address: null, // Virtual courses don't need an address
        userId: userIds[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mode: "hybrid",
        area: "health",
        level: "advanced",
        teacher: "Prof. Ricardo Hernández",
        company: "Medical Academy",
        modules: ["Anatomy", "Surgery", "Clinical Practice"],
        duration: "hours",
        cost: 299.99,
        certificate: false,
        address: "456 Wellness Drive",
        userId: userIds[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // This will delete all entries from the Courses table
    return queryInterface.bulkDelete("Courses", null, {});
  },
};
