const mongoose = require("mongoose");
const env = require("../utils/envs");

async function database() {
  return await mongoose.connect(
    `mongodb+srv://${env.database.user}:${env.database.pass}@${env.database.host}/${env.database.name}?retryWrites=true&w=majority`
  );
}

module.exports = database;
