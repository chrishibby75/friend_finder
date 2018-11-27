// Include the path package to get the correct file path
var path = require("path");


//routing

module.exports = function(app) {
  //HTML GET Requests
  //Below code handles when users "visit" a page.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //If no matching route is found default back to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};