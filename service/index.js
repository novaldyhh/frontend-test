var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();

var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

var Employee = require("./routes/Employee");
app.use("/employee", Employee);

var Division = require("./routes/Division");
app.use("/division", Division);

app.listen(port, () => {
  console.log("server sedang berjalan di port " + port);
});
