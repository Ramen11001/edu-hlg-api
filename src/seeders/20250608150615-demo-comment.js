'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Comments', [
      {
        rating: 5,
        text: "Excelente curso!. Muy instructivo.",
        userId: 1,
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 4,
        text: "Muy buenas explicaciones, me encantó el material.",
        userId: 2,
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 3,
        text: "Buen contenido, pero esperaba más profundidad",
        userId: 3,
        courseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 5,
        text: "Absolutamente Fantástico!",
        userId: 4,
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 2,
        text: "Fataaaaaaaaaal",
        userId: 5,
        courseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 4,
        text: "Me gustó la práctica",
        userId: 6,
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 3,
        text: "Necesita más material",
        userId: 7,
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
