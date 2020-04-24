require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected.");
});

// Saving to mongo database
// const note = new Note({
//   title: "test",
//   content: "note 1",
// });

// note.save();

// HTTP request logger
// app.use(morgan("tiny"));

app.use("/", routes);

app.listen(PORT, console.log("Server running on port " + PORT));
