const Todo = require("../models/todo.models.js");

exports.add = async (req, res) => {
  // res.json(req.body);
  const { title, desc, date, time, active } = req.body;

  const newTodo = new Todo({
    title,
    desc,
    date,
    time,
    active,
  });

  try {
    const result = await newTodo.save();
    await res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.active = async (req, res) => {
  const doc = await Todo.findOne(req.params);
  doc.active = req.body.active;
  await doc.save();

  res.json(doc);
};

exports.edit = async (req, res) => {
  const doc = await Todo.findOne(req.params);
  doc.title = req.body.title;
  doc.desc = req.body.desc;
  doc.time = req.body.time;
  doc.date = req.body.date;
  doc.active = req.body.active;

  try {
    await doc.save();
  } catch (error) {
    res.status(500).json(error);
  }

  res.json(doc);
};

exports.del = async (req, res) => {
  const query = await Todo.deleteOne(req.params);
  res.send(query);
};

exports.list = async (req, res) => {
  await Todo.find().then((todo) => {
    res.status(200).json({
      todo,
    });
  });
};
