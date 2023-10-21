class UnexpectedError {
  constructor(message) {
    this.code = 500;
    this.subject = "Unexpected Error";
    this.message = message;
  }
}

class NotFound {
  constructor(message) {
    this.code = 404;
    this.subject = "Not Found";
    this.message = message;
  }
}

class Forbidden {
  constructor(message) {
    this.code = 403;
    this.subject = "Forbidden";
    this.message = message;
  }
}

class Unauthorized {
  constructor(message) {
    this.code = 401;
    this.subject = "Unauthorized";
    this.message = message;
  }
}

class BadRequest {
  constructor(message) {
    this.code = 400;
    this.subject = "Bad Request";
    this.message = message;
  }
}

module.exports = {
  UnexpectedError,
  NotFound,
  Forbidden,
  Unauthorized,
  BadRequest,
};
