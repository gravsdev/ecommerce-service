const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user");
const { INCORRECT_CREDENTIALS } = require("../utils/messages");
const { offsetTimezone } = require("../utils/helpers");
const { isValidID } = require("../utils/valids");
const { BadRequest, NotFound, Unauthorized } = require("../utils/errors");
const env = require("../utils/envs");

class UserService {
  async create(user) {
    try {
      await userModel(user).validate();

      const existingEmail = await userModel.findOne({ email: user.email });
      if (existingEmail) {
        throw new BadRequest(`Email \`${user.email}\` already exists.`);
      }

      user.password = await bcrypt.hash(user.password, 10);
      if (user.isOwner) user.isOwner = false;

      const data = await userModel.create(user);

      return data;
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = Object.values(error.errors).map(
          (err) => err.message
        );
        throw new BadRequest(validationErrors.join(", "));
      }

      throw error;
    }
  }

  async update(id, user) {
    try {
      if (!isValidID(id)) {
        throw new BadRequest(`ID \`${id}\` is invalid.`);
      }

      await userModel(user).validate();

      const existingUser = await userModel.findById(id);
      if (!existingUser) {
        throw new NotFound(`ID \`${id}\` not found.`);
      }

      if (user.email) user.email = existingUser.email;
      if (user.password) user.password = await bcrypt.hash(user.password, 10);
      if (user.isOwner) user.isOwner = existingUser.isOwner;

      const data = await userModel.findOneAndUpdate(
        { _id: id },
        { $set: user },
        { new: true }
      );

      return data;
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = Object.values(error.errors).map(
          (err) => err.message
        );
        throw new BadRequest(validationErrors.join(", "));
      }

      throw error;
    }
  }

  async getAll(filters) {
    try {
      const options = {};
      if (filters.search) {
        options.$or = [{ email: { $regex: filters.search, $options: "i" } }];
      }

      if (filters.startDate && filters.finalDate) {
        const { startDate, finalDate } = offsetTimezone(
          filters.startDate,
          filters.finalDate
        );

        options.createdAt = {
          $gte: startDate,
          $lte: finalDate,
        };
      }

      const data = await userModel
        .find(options)
        .skip((filters.pageNumber - 1) * filters.amountData)
        .limit(filters.amountData);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getByID(id) {
    try {
      if (!isValidID(id)) {
        throw new BadRequest(`ID \`${id}\` is invalid.`);
      }

      const data = await userModel.findById(id);
      if (!data) {
        throw new NotFound(`ID \`${id}\` not found.`);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        throw new Unauthorized(INCORRECT_CREDENTIALS);
      }

      const isCorrect = await bcrypt.compare(password, user.password);
      if (!isCorrect) {
        throw new Unauthorized(INCORRECT_CREDENTIALS);
      }

      const payload = {
        userId: user._id,
        email: user.email,
        isOwner: user.isOwner,
      };

      const token = jwt.sign(payload, env.token.authentication, {
        expiresIn: "2h",
      });

      return { token, user };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
