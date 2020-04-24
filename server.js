require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// HTTP request logger
app.use(morgan("tiny"));

app.listen(PORT, console.log("Server running on port" + PORT));

app.get("/api", function (req, res) {
  const data = {
    name: "d",
    title: "d",
  };
  res.json(data);
});

app.get("/api/name", function (req, res) {
  const data = {
    name: "dddd",
    title: "ssssd",
  };
  res.json(data);
});
