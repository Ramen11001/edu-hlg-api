const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const courseService = require("../service/course.service");

const {
  validateCourseData,
  validateCourseDataUpdate,
} = require("../validators/course.validator");

/**
 * Route handler for creating a new course.
 * Validates the request body before passing it to the service.
 *
 * @route POST /courses
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.post("/", validateCourseData, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newCourse = await courseService.createCourse(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el curso" });
  }
});

/**
 *
 * @route GET /course
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.get("/",  async (req, res) => {
  try {
    const course = await courseService.getCourses(req.queryOptions);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los cursos" });
  }
});

/**
 * Route handler for retrieving a specific course by ID.
 * Returns a 404 error if the course is not found.
 *
 * @route GET /courses/:id
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.get("/:id", async (req, res) => {
  try {
    const course = await courseService.getCoursesById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el curso" });
  }
});

/**

 *
 * @route PUT /course/:id
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.put("/:id", validateCourseDataUpdate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedCourse = await courseService.updateCourse(
      req.params.id,
      req.body
    );
    if (!updatedCourse) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el curso" });
  }
});

/**
 * Route handler for deleting a course by ID.
 * Returns a 404 error if the course does not exist.
 *
 * @route DELETE /courses/:id
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.delete("/:id", async (req, res) => {
  try {
    const deletedCourse = await courseService.deleteCourse(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({ error: "Curso no encontrado" });
    }
    res.json({ message: "Curso eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el curso" });
  }
});

module.exports = router;
