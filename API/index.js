import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./routes/todo.routes.js";

// import Todo from "./models/todo.models";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.error(err));

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port : " + 3000);
});

app.use("/api", router);
