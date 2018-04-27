let express = require("express");
let path = require("path");
let parser = require("body-parser");

let html = require("./app/routing/htmlRoutes.js");
let api = require("./app/routing/apiRoutes.js");
let friends = require("./app/data/friends.js");

let app = express();
let PORT = 10000;

app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());
app.use("./app/public", express.static("./app/public"));

// html routes
let homePage = new html();
homePage.home(app, path);

let surv = new html();
surv.survey(app, path);

// api methods
let retrieveFriends = new api();
retrieveFriends.getFriends(app, friends);

let updateFriends = new api();
updateFriends.newFriends(app, friends);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });