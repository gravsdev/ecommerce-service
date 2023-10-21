const mongoose = require("mongoose");

const isValidID = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

const isValidEmail = (email) => {
  const emailRegex = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

  return emailRegex.test(email);
};

const isValidPass = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/;

  return passwordRegex.test(password);
};

module.exports = {
  isValidID,
  isValidPass,
  isValidEmail,
};
