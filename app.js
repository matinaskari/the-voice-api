const express = require("express");
const logger = require("morgan");
const { join } = require("path");
const { PORT } = require("./config/config");

const appRoutes = require("./routes/app.routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

app.use("/api", appRoutes);

app.listen(PORT, "127.0.0.1", () =>
  console.log(`[i] server is running on :8000 ...`)
);
