const express = require("express");

const Note = require("../models/Note");

const router = express.Router();

router.get("/", function (req, res) {
  Note.find({}, function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      console.log(posts);
    }
  });
});

router.get("/api/name", function (req, res) {
  const data = {
    name: "dddd",
    title: "ssssd",
  };
  res.json(data);
});

router.post("/save", function (req, res) {
  console.log("Body: ", req.body);

  res.json({
    msg: "we received the data.",
  });
});

module.exports = router;
