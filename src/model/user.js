const mongoose = require("mongoose");
const { isValidEmail, isValidPass } = require("../utils/valids");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: (value) => isValidEmail(value),
        message: (props) => `Email \`${props.value}\` is invalid.`,
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value) => isValidPass(value),
        message: (props) => `Password \`${props.value}\` is invalid.`,
      },
    },
    isOwner: {
      type: Boolean,
      default: false,
    },
    image: {
      type: Buffer,
    },
    details: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
