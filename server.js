const express = require("express");
const app = express();

app.use( (req, res, next) => {
    let currentTime = new Date().getHours();
    currentTime >= 8 && currentTime<= 17
      ? next()
      : res.send("<h4>Our office is not Open</h4>");
  }
);

app.use(express.static(__dirname + '/public/'))

// app.get("/home", (req, res) => {
//   res.sendFile(__dirname + "/public/home.html");
// });
// app.get("/services", (req, res) => {
//   res.sendFile(__dirname + "/public/ourservices.html");
// });
// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });

app.listen("3000", (error) => {
  error
    ? console.log("server not running")
    : console.log("server running on port 3000");
});
