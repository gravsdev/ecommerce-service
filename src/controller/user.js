const userService = require("../service/user");
const { responseHandler } = require("../utils/responses");

class UserController {
  async create(req, res, next) {
    try {
      const data = await userService.create(req.body);

      responseHandler.created(res, data);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const data = await userService.update(req.params.id, req.body);

      responseHandler.updated(res, data);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const filters = {
        pageNumber: Number(req.query.page) || 1,
        amountData: Number(req.query.data) || 8,
        startDate: req.query.startDate,
        finalDate: req.query.finalDate,
        search: req.query.search,
      };

      const data = await userService.getAll(filters);

      responseHandler.ok(res, data);
    } catch (error) {
      next(error);
    }
  }

  async getByID(req, res, next) {
    try {
      const data = await userService.getByID(req.params.id);

      responseHandler.ok(res, data);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const data = await userService.login(email, password);

      responseHandler.ok(res, data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
