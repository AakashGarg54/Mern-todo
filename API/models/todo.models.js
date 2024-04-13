import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  dateandtime: { type: Date, required: true },
  active: { type: Boolean, required: true },
});

const Todo = mongoose.model("todo", todoSchema);

export default Todo;
