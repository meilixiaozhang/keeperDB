const mongoose = require("mongoose");

// Schema
const notesSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Model
const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
