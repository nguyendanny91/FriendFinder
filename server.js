// Dependencies
// =============================================================
var express = require("express");
var PORT = 3000 || process.env.PORT;

var app = express()

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  