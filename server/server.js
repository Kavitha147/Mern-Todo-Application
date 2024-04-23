const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./config/db.config");
const todos = require("./routes/todo.routes");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

connectDb();

app.use(todos);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Mernstack" });
});

app.listen(8081, () => {
  console.log("Port is runnning on 8081");
});
