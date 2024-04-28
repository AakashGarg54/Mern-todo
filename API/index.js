import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/todo.routes.js";

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

app.listen(3000, () => {
  console.log("Server is running on port : " + 3000);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", router);
