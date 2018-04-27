// let path = require('path');
// let express = require('express');

// const app = express();
// const PORT = 3000;

//require("./path) (app) in the server file; (this is if app is passed as a param to the function)

let html = function () {
    this.survey = function (app, path) {
        app.get('/survey', (req, res) => res.sendFile(path.join(__dirname, '../public/survey.html')))
    }
    this.home = function (app, path) {
        app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/home.html')))
    }
}

// let random = new html();
// random.home();

// let surv = new html();
// surv.survey();

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });

module.exports = html;