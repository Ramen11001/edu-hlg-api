"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Defines associations between models.
     * This method is called automatically in `models/index.js` and is not part of the Sequelize lifecycle.
     *
     * @param {object} models - All defined models in the application.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId", // Defined in migration, links comment to a specific user.
        onDelete: "CASCADE", // Enables cascading deletion when a user is removed.
      });
      Comment.belongsTo(models.Course, {
        //Because one comment can only have one course.
        foreignKey: "courseId", // Defined in migration, links comment to a specific course.
        onDelete: "CASCADE", // Enables cascading deletion when a course is removed.
      });
    }
  }
  Comment.init(
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
