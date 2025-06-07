"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Initialize the User model with attributes
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
