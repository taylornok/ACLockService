// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var publicPath = path.join(__dirname, 'public');
var styles = path.join(__dirname, 'css');
var images = path.join(__dirname, 'img');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
// app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use(express.static(styles));
app.use(express.static(images));

// Static directory
app.use(express.static(path.join(__dirname + 'public')));

// Routes
// =============================================================

require("./routes/contact-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
