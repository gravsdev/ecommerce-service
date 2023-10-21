class ResponseHandler {
  ok(res, message) {
    success(res, { code: 200, subject: "Ok", message: message });
  }

  created(res, message) {
    success(res, { code: 201, subject: "Created", message: message });
  }

  updated(res, message) {
    success(res, { code: 200, subject: "Updated", message: message });
  }

  removed(res, message) {
    success(res, { code: 200, subject: "Removed", message: message });
  }
}

const success = (res, resBody) => {
  res.status(resBody.code).send({
    success: { subject: resBody.subject, message: resBody.message },
    failure: null,
  });
};

const failure = (res, resBody) => {
  res.status(resBody.code).send({
    success: null,
    failure: { subject: resBody.subject, message: resBody.message },
  });
};

module.exports = {
  responseHandler: new ResponseHandler(),
  success,
  failure,
};
