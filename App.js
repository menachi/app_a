const express = require("express");
const app = express();
//change port
const port = 3008;

app.get("/test", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/test33", (req, res) => {
  res.send("Hello World sdafsadfsdaf!!!");
});

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//this is my changes
