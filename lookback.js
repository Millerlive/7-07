// express - mongoose
// npm i express mongoose

const express = require("express");
const mongoose = require("mongoose");
const {BookModel} = require("./model");
const routes = require("./routes");

mongoose.connect("mongodb://127.0.0.1:27017/mydata");
const app = express();
app.use('/user',routes)

app.get("/", (req, res) => {
  BookModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("response content");
    });
});

app.listen(9000, () => {
  console.log("listening on http://localhost:9000");
});
