import express from "express";

import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Aakash:Aakash@todo.bkqeolg.mongodb.net/todo?retryWrites=true&w=majority&appName=todo"
);

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port : " + 3000);
});
