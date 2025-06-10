const { Course } = require("../models");

/**
 * Retrieves all course based on query options.
 *
 * @async
 * @function getCourses
 * @param {object} [queryOptions={}] - Options for filtering and pagination.
 * @returns {Promise<Array>} - List of course matching query options.
 */
const getCourses = async (queryOptions = {}) => {
  return await Course.findAll(queryOptions);
};

/**
 * Retrieves a specific course by its ID.
 *
 * @async
 * @function getCoursesById
 * @param {number} id - The ID of the course to retrieve.
 * @returns {Promise<object|null>} - The found course or null if not found.
 */
const getCoursesById = async (id) => {
  return await Course.findByPk(id);
};

/**
 * Creates a new course in the database.
 *
 * @async
 * @function createCourse
 * @param {object} data - The data for the new course.
 * @returns {Promise<object>} - The newly created course.
 */
const createCourse = async (data) => {
  return await Course.create(data); //data is generic
};

/**
 * Updates an existing course by ID.
 *
 * @async
 * @function updateCourse
 * @param {number} id - The ID of the course to update.
 * @param {object} data - The new data for the course.
 * @returns {Promise<object|null>} - The updated course or null if not found.
 */
const updateCourse = async (id, data) => {
  const course = await Course.findByPk(id);
  if (course) {
    return await course.update(data); //Sequelize's own function
  }
  return null;
};

/**
 * Deletes a course by ID.
 *
 * @async
 * @function deleteCourse
 * @param {number} id - The ID of the course to delete.
 * @returns {Promise<object|null>} - A success message or null if the course was not found.
 */
const deleteCourse = async (id) => {
  const course = await Course.findByPk(id);
  if (!course) {
    return null;
  }

  await course.destroy(); //Sequelize's own function
  return { message: "Curso eliminado exitosamente" };
};

module.exports = {
  getCourses,
  getCoursesById,
  createCourse,
  updateCourse,
  deleteCourse
};
