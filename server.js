/* eslint-disable */
var express = require("express");
var app = express();

var path = process.cwd();

app.use(express.static(path + "/app/public"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);

// Root Route
app.get("/", function(req, res) {
  //res.sendFile(path.join(__dirname,'public', 'index.html'));
  res.sendFile(path + "/public/index.html");
});

// Page Not Found Route
app.get("*", function(req, res) {
  res.sendFile(path + "/app/public/notfound.html");
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Node.js listening on port " + port + "...");
});
