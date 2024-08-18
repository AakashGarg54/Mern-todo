import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import todo from "./routes/todo.routes.js";
import auth from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.error(err));

const __dirname = path.resolve();

app.listen(3306, () => {
  console.log("Server is running on port : " + 3306);
});

app.use("/api/todo", todo);
app.use("/api/auth", auth);

app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "./client", "build", "index.html"));
  res.send("404 Error")
  
});

// app.use(express.static(path.join(__dirname, "./client/build")));
