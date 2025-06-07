"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
  User.init(
      /**
       * Unique firstName, lastName and email for the user.
       * Expected to be a non-null string.
       */
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      /**
       * Password for the user.
       * Expected to be a non-null string.
       */
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: { 
    type: DataTypes.ENUM('student', 'instructor'),
    defaultValue: 'student',
  }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
