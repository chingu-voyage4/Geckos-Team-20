// Load environmental variables
require("dotenv").config();

// Require dependiencies
const express = require("express");

const app = express();

// Require setting modules
const port = process.env.PORT || 8080;
const path = process.cwd();
const rootRoute = require("../router");

// Configuring express middlewares
app.use(express.static(`${path}/app/public`));
app.use("/jquery", express.static(`${path}/node_modules/jquery/dist/`));
app.use("/bootstrap", express.static(`${path}/node_modules/bootstrap/dist/`));

// Route settings
app.use("/", rootRoute);

// Export from this file...
module.exports = { app, port };
