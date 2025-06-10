const { body } = require("express-validator");

/**
 * Validation rules for creating a new user.
 * Ensures required fields are present and correctly formatted.
 */
const validateUserData = [
    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("El campo firstName es obligatorio.")
        .isString()
        .isLength({ min: 1 })
        .withMessage("El campo firstName debe ser una cadena de texto."),
         body("lastName")
        .trim()
        .notEmpty()
        .withMessage("El campo lastName es obligatorio.")
        .isString()
        .isLength({ min: 1 })
        .withMessage("El campo lastName debe ser una cadena de texto."),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("El campo password es obligatorio.")
        .isString()
        .isLength({ min: 1 })
        .withMessage("El campo password debe ser una cadena de texto."),
        body("email")
        .trim()
        .notEmpty()
        .withMessage("El campo email es obligatorio.")
        .isString()
        .isLength({ min: 1 })
        .withMessage("El campo email debe ser una cadena de texto."),
];

/**
 * Validation rules for updating a user.
 * Ensures optional fields are correctly formatted.
 */
const validateUserDataUpdate = [
    body("firstName")
        .optional()
        .isString()
        .withMessage("El campo firstName debe ser una cadena de texto."),
        body("lastName")
        .optional()
        .isString()
        .withMessage("El campo lastName debe ser una cadena de texto."),
         body("email")
        .optional()
        .isString()
        .withMessage("El campo email debe ser una cadena de texto."),
    body("password")
        .optional()
        .isString()
        .withMessage("El campo password debe ser una cadena de texto."),
];

module.exports = {
    validateUserData,
    validateUserDataUpdate
};
