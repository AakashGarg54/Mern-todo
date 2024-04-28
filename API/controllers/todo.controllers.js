import Todo from "../models/todo.models.js";

export const add = async (req, res) => {
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

export const active = async (req, res) => {
  const doc = await Todo.findOne(req.params);
  doc.active = req.body.active;
  await doc.save();

  res.json(doc);
};

export const edit = async (req, res) => {
  const doc = await Todo.findOne(req.params);
  doc.title = req.body.title;
  doc.desc = req.body.desc;
  doc.time = req.body.time;
  doc.date = req.body.date;
  doc.active = req.body.active;

  await doc.save();

  res.json(doc);
};

export const del = async (req, res) => {
  const query = await Todo.deleteOne(req.params);
  res.send(query);
};

export const list = async (req, res) => {
  await Todo.find().then((todo) => {
    res.status(200).json({
      todo,
    });
  });
};
