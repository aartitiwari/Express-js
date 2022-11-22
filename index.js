const express = require("express");
const app = express();
const one = require('./routes/one.js');

const PORT = 3000;

app.get("/", (req, res) => {
  console.log("works");
  res.send("works");
});

app.get("/ram", (req, res) => {
  console.log("yeh aata kya");
  res.send("ram called");
});

/* req params: sends the parameter passed in request */

app.get("/ram/:id-:mappedId", (req, res) => {
  res.send(req.params);
});

app.use('/api/',one);

app.listen(PORT, () => {
  console.log(`express app listening on port  ${PORT}`);
});
