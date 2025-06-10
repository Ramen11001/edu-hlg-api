const { Op } = require("sequelize");
/**
 * Middleware for handling pagination and search queries.
 * Modifies `req.queryOptions` with the generated options.
 *
 * @param {object} req - HTTP request object.
 * @param {object} res - HTTP response object.
 * @param {function} next - Function to continue to the next middleware.
 */
function filterPagination(req, res, next) {
  const { search, include, limit, offset, pagination } = req.query;
  const queryOptions = {};

  // Search configuration for courses
  if (req.baseUrl == "/courses") {
    if (search) {
      // We search by teacher, company or address using ILIKE (case-insensitive search)
      queryOptions.where = {
        [Op.or]: [
          { teacher: { [Op.iLike]: `%${search}%` } },
          { company: { [Op.iLike]: `%${search}%` } },
          { address: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }
    // Course specific filters
    // Filter by mode (in-person, virtual, hybrid)
    if (req.query.mode) {
      queryOptions.where = queryOptions.where || {};
      queryOptions.where.mode = req.query.mode;
    }
    //  Filter by area (technique, humanities, health)
    if (req.query.area) {
      queryOptions.where = queryOptions.where || {};
      queryOptions.where.area = req.query.area;
    }
    //  Filter by level (beginner, intermediate, advanced)
    if (req.query.level) {
      queryOptions.where = queryOptions.where || {};
      queryOptions.where.level = req.query.level;
    }
    //  Filter by duration (hours, weeks, months)
    if (req.query.duration) {
      queryOptions.where = queryOptions.where || {};
      queryOptions.where.duration = req.query.duration;
    }
    //  Filter by certificate (true o false)
    if (req.query.certificate) {
      queryOptions.where = queryOptions.where || {};
      //Convert to boolean: "true" or "false"
      queryOptions.where.certificate =
        req.query.certificate.toLowerCase() === "true";
    }
    // Allow filtering by teacher and company exactly if passed as a query
    if (req.query.teacher) {
      queryOptions.where = queryOptions.where || {};
      queryOptions.where.teacher = req.query.teacher;
    }
    // Filter by modules if "modules" is passed (e.g., expecting an array)
    if (req.query.modules) {
      const modulesArr = req.query.modules.split(",");
      queryOptions.where = queryOptions.where || {};
      queryOptions.where.modules = { [Op.overlap]: modulesArr };
    }
  }
  const costConditions = [];

  if (req.query.minCost && !isNaN(req.query.minCost)) {
    // Add price filter for minimum price
    costConditions.push({ cost: { [Op.gte]: parseFloat(req.query.minCost) } });
  }

  if (req.query.maxCost && !isNaN(req.query.maxCost)) {
    // Add price filter for maximum price
    costConditions.push({ cost: { [Op.lte]: parseFloat(req.query.maxCost) } });
  }

  // If costConditions contains filters, apply them with Op.and
  if (costConditions.length > 0) {
    if (queryOptions.where) {
      queryOptions.where = {
        [Op.and]: [queryOptions.where, ...costConditions],
      };
    } else {
      queryOptions.where = { [Op.and]: costConditions };
    }
  }

  // Search configuration for comments
  if (req.baseUrl == "/comments") {
    if (search) {
      queryOptions.where = {
        [Op.or]: [{ text: { [Op.iLike]: `%${search}%` } }],
      };
    }
  }
  // Search configuration for users
  if (req.baseUrl == "/users") {
    if (search) {
      queryOptions.where = {
        [Op.or]: [
          { firstName: { [Op.iLike]: `%${search}%` } },
          { lastName: { [Op.iLike]: `%${search}%` } },
          { email: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }
  }
  // Handling relationships using `include`
  if (include) {
    if (Array.isArray(include)) {
      queryOptions.include = include.map((relation) => {
        return { association: relation };
      });
    } else {
      queryOptions.include = { association: include };
    }
  }
  // Pagination setup
  if (pagination === "true") {
    queryOptions.limit = limit && !isNaN(limit) ? parseInt(limit, 10) : 10;
    queryOptions.offset = offset && !isNaN(offset) ? parseInt(offset, 10) : 0;
  } else {
    delete queryOptions.limit;
    delete queryOptions.offset;
  }
  // Attach the query options to the request object
  req.queryOptions = queryOptions;
  next();
}
module.exports = { filterPagination };
