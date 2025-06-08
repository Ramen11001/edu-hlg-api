"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Defines associations between models.
     * This method is called automatically in `models/index.js` and is not part of the Sequelize lifecycle.
     *
     * @param {object} models - All defined models in the application.
     */
    static associate(models) {
      Course.belongsTo(models.User, {
        foreignKey: "userId", // Defined in migration, links course to a specific user.
        onDelete: "CASCADE", // Enables cascading deletion when a user is removed.
      });

      Course.hasMany(models.Comment, {
        foreignKey: "courseId", // Defined in migration, links course to multiple comments.
        onDelete: "CASCADE", // Enables cascading deletion when a course is removed.
        as: "comments",
      });
    }
  }
  Course.init(
    {
      mode: {
        type: DataTypes.ENUM("in-person", "virtual", "hybrid"),
        allowNull: false,
      },
      area: {
        type: DataTypes.ENUM("technique", "humanities", "health"),
        allowNull: false,
      },
      level: {
        type: DataTypes.ENUM("beginner", "intermediate", "advanced"),
        allowNull: false,
      },
      teacher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modules: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      duration: {
        type: DataTypes.ENUM("hours", "weeks", "months"),
        allowNull: false,
      },
      cost: { type: DataTypes.FLOAT, allowNull: false },
      certificate: { type: DataTypes.BOOLEAN, defaultValue: true },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
