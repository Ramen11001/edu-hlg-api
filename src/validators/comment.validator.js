const { body } = require("express-validator");

/**
 * Validation rules for creating a new comment.
 * Ensures required fields are present and correctly formatted.
 */
const validateCommentData = [
  body("rating")
    .notEmpty()
    .withMessage("El campo rating es obligatorio.")
    .isInt({ min: 1, max: 5 })
    .withMessage('El campo "rating" debe ser un número entre 1 y 5.'),
  body("text")
    .notEmpty()
    .withMessage("El campo text es obligatorio.")
    .isString()
    .withMessage("El campo text debe ser una cadena de texto."),
  body("courseId")
    .notEmpty()
    .withMessage("El campo courseId es obligatorio.")
    .isInt()
    .withMessage("El campo courseId debe ser un número entero válido."),
  body("userId")
    .notEmpty()
    .withMessage("El campo courseId es obligatorio.")
    .isInt({ min: 1, max: 5 })
    .withMessage('El campo "rating" debe ser un número entre 1 y 5.'),
];

/**
 * Validation rules for updating a comment.
 * Ensures optional fields are correctly formatted.
 */
const validateCommentDataUpdate = [
  body("rating")
    .optional()
    .isInt()
    .withMessage("El campo rating debe ser un número entero válido"),
  body("text")
    .optional()
    .isString()
    .withMessage("El campo text debe ser una cadena de texto."),
  body("courseId")
    .optional()
    .isInt()
    .withMessage("El campo courseId debe ser un número entero válido."),
  body("userId")
    .optional()
    .isInt()
    .withMessage("El campo userId debe ser un número entero válido."),
];

module.exports = {
  validateCommentData,
  validateCommentDataUpdate,
};
