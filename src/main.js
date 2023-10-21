const express = require("express");
const cors = require("cors");
const router = require("./routes");
const database = require("./config/database");
const handleError = require("./middleware/error");
const env = require("./utils/envs");

const app = express();
app.use(
  cors({
    origin: env.server.origins,
    methods: env.server.methods,
    allowedHeaders: env.server.headers,
  })
);
app.use(express.json());
app.use(router);
app.use(handleError);

database().then(() => console.log("Connected to the database."));

app.listen(env.server.port, () => {
  console.log(`Started by port ${env.server.port}.`);
});
