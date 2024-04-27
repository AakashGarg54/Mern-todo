import Todo from "../models/todo.models.js";

export const add = async (req, res) => {
  console.log(req.body);
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
    res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const edit = async (req, res) => {
  res.json({ message: "edit" });
};

export const del = async (req, res) => {
  res.json({ message: "del" });
};

export const list = async (req, res) => {
  res.json({ message: "list" });
};
