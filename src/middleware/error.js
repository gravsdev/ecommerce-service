const { failure } = require("../utils/responses");

const handleError = (resBody, req, res, next) => {
  resBody.code = resBody.code ? resBody.code : 500;
  failure(res, resBody);
  next();
};

module.exports = handleError;
