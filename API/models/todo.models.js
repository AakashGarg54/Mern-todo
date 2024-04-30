const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  active: { type: Boolean, required: true },
});

const Todo = mongoose.model("todo", todoSchema);

exports.Todo = Todo;
