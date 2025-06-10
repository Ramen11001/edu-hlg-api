const { body } = require("express-validator");

/**
 * Validation rules for creating a new course.
 * Ensures required fields are present and correctly formatted.
 */
const validateCourseData = [
  body("teacher")
    .trim()
    .notEmpty()
    .withMessage("El campo teacher es obligatorio.")
    .isString()
    .isLength({ min: 1 })
    .withMessage("El campo teacher debe ser una cadena de texto."),
  body("company")
    .trim()
    .notEmpty()
    .withMessage("El campo company es obligatorio.")
    .isString()
    .isLength({ min: 1 })
    .withMessage("El campo teacher debe ser una cadena de texto."),
  body("address")
    .optional()
    .isString()
    .withMessage("El campo address debe ser una cadena de texto."),
  body("cost")
    .notEmpty()
    .isFloat({ gt: 0 })
    .withMessage("El campo cost debe ser un número positivo."),
  body("userId")
    .notEmpty()
    .withMessage("El campo userId es obligatorio.")
    .isInt()
    .withMessage("El campo userId debe ser un número entero válido."),
  body("mode")
    .notEmpty()
    .withMessage("El campo mode es obligatorio.")
    .isString()
    .isIn(["in-person", "virtual", "hybrid"])
    .withMessage("El campo mode debe ser 'in-person', 'virtual' o 'hybrid'."),
  body("area")
    .notEmpty()
    .withMessage("El campo area es obligatorio.")
    .isString()
    .isIn(["technique", "humanities", "health"])
    .withMessage(
      "El campo area debe ser 'technique', 'humanities' o 'health'."
    ),
  body("level")
    .notEmpty()
    .withMessage("El campo level es obligatorio.")
    .isString()
    .isIn(["beginner", "intermediate", "advanced"])
    .withMessage(
      "El campo level debe ser 'beginner', 'intermediate' o 'advanced'."
    ),
  body("duration")
    .notEmpty()
    .withMessage("El campo duration es obligatorio.")
    .isString()
    .isIn(["hours", "weeks", "months"])
    .withMessage("El campo duration debe ser 'hours', 'weeks' o 'months'."),
  body("certificate")
    .notEmpty()
    .withMessage("El campo certificate es obligatorio.")
    .isBoolean()
    .withMessage("El campo certificate debe ser true o false."),
  body("modules")
    .isArray({ min: 1 }) 
    .withMessage("El campo modules debe ser un array con al menos un módulo.")
    .custom((modules) => {
      if (!modules.every((module) => typeof module === "string")) {
        throw new Error(
          "Todos los elementos en modules deben ser cadenas de texto."
        );
      }
      return true;
    }),
];

/**
 * Validation rules for updating a course.
 * Ensures optional fields are correctly formatted.
 */
const validateCourseDataUpdate = [
  body("teacher")
    .optional()
    .isString()
    .withMessage("El campo teacher debe ser una cadena de texto."),
  body("company")
    .optional()
    .isString()
    .withMessage("El campo company debe ser una cadena de texto."),
 body("address")
  .optional()
  .isString()
  .withMessage("El campo address debe ser una cadena de texto."),
  body("cost")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("El campo cost debe ser un número positivo."),
  body("userId")
    .optional()
    .isInt()
    .withMessage("El campo userId debe ser un número entero válido."),
  body("mode")
    .optional()
    .isString()
    .isIn(["in-person", "virtual", "hybrid"])
    .withMessage("El campo mode debe ser 'in-person', 'virtual' o 'hybrid'."),
  body("area")
    .optional()
    .isString()
    .isIn(["technique", "humanities", "health"])
    .withMessage(
      "El campo area debe ser 'technique', 'humanities' o 'health'."
    ),
  body("level")
    .optional()
    .isString()
    .isIn(["beginner", "intermediate", "advanced"])
    .withMessage(
      "El campo level debe ser 'beginner', 'intermediate' o 'advanced'."
    ),
  body("duration")
    .optional()
    .isString()
    .isIn(["hours", "weeks", "months"])
    .withMessage("El campo duration debe ser 'hours', 'weeks' o 'months'."),
  body("certificate")
    .optional()
    .isBoolean()
    .withMessage("El campo certificate debe ser true o false."),
  body("modules")
    .optional()
    .isArray({ min: 1 })
    .withMessage("El campo modules debe ser un array con al menos un módulo.")
    .custom((modules) => {
      if (!modules.every((module) => typeof module === "string")) {
        throw new Error("Todos los elementos en modules deben ser cadenas de texto.");
      }
      return true;
    }),
];

module.exports = {
  validateCourseData,
  validateCourseDataUpdate,
};
