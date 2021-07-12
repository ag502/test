const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).send({
    test: "success",
  });
});

app.get("/good", (req, res) => {
  res.status(200).send({
    test: "good",
  });
});

app.get("/test2", (req, res) => {
  res.render("<h1>test</h1>");
});

app.listen(5000, () => {
  console.log("5000 ready");
});
