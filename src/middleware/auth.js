const jwt = require("jsonwebtoken");
const env = require("../utils/envs");
const { Unauthorized, Forbidden } = require("../utils/errors");
const { TOKEN_INVALID } = require("../utils/messages");

/**
 * Comprueba si el token ingresado es valido.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const checkToken = (req, res, next) => {
  try {
    const sessionToken = req.headers.authorization || "";
    const token = sessionToken.startsWith("Bearer ")
      ? sessionToken.slice(7)
      : sessionToken;

    const credentials = jwt.verify(token, env.token.authentication);

    req.user = credentials;
    next();
  } catch (error) {
    throw new Unauthorized(TOKEN_INVALID);
  }
};

/**
 * Verifica si el usuario autenticado coincide con el usuario en la solicitud.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const checkAccountOwnership = (req, res, next) => {
  try {
    if (req.params.id && req.params.id !== req.user.userId) {
      throw new Unauthorized("You do not have permission on this account.");
    }

    next();
  } catch (error) {
    throw error;
  }
};

/**
 * Comprueba si la cuenta es de administrador.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const checkIfIsOwner = (req, res, next) => {
  try {
    const isOwner = req.user.isOwner;
    if (!isOwner) {
      throw new Forbidden("You are not an admin.");
    }

    next();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  checkToken,
  checkAccountOwnership,
  checkIfIsOwner,
};
