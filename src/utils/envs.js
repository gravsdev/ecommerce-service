require("dotenv").config();

const env = {
  server: {
    port: process.env.SERVER_PORT || 3000,
    origins: process.env.ALLOWED_ORIGINS || "*",
    methods: process.env.ALLOWED_METHODS || "GET",
    headers: process.env.ALLOWED_HEADERS || "Content-Type",
  },
  database: {
    user: process.env.DB_USER || "mongo",
    pass: process.env.DB_PASS || "password",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || "test_db",
    ssl_mode: process.env.DB_SSL_MODE || "disable",
  },
  token: {
    authentication: process.env.SECRET_AUTH_KEY || "my-secret-key",
  },
};

module.exports = env;
