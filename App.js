const express = require("express");
const app = express();
//change port
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//this is my changes
