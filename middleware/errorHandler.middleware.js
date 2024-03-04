const { logger } = require("../configs/logger");

const errorHandler = (error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  logger.error(error);

};

module.exports = errorHandler;