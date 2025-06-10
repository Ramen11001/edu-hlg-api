const jwt = require("jsonwebtoken");
const { User } = require("../models");
const SECRET_KEY = "secret_key";

/**
 * User authentication and token generation
 * @param {string} firstName - first name
 * @param {string} lastName - last name
 * @param {string} email - email
 * @param {string} password - user password
 * @returns {string} JWT token
 */
const login = async (firstName, lastName, email, password) => {
  const user = await User.findOne({
    where: {
      email,
      firstName,
      lastName,
    },
  });

  if (!user || user.password !== password) {
    throw new Error("Credenciales inválidas");
  }

  return jwt.sign(
    {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    SECRET_KEY,
    { expiresIn: "24h" }
  );
};

module.exports = { login };
