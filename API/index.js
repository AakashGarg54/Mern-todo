import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import router from "./routes/todo.routes.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

<<<<<<< HEAD
=======

>>>>>>> cc2b372e04d85cec4a78ed63759af2615df7b903
mongoose
.connect(process.env.MONGODB)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.error(err));

<<<<<<< HEAD
const __dirname = path.resolve();
=======
  const __dirname = path.resolve();
>>>>>>> cc2b372e04d85cec4a78ed63759af2615df7b903

app.listen(3306, () => {
  console.log("Server is running on port : " + 3306);
});

app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client", "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "./client/build")));
