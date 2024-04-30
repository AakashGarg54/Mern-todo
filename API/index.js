const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const router = require("./routes/todo.routes.js");

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


app.listen(3306, () => {
  console.log("Server is running on port : " + 3306);
});

app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client", "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "./client/build")));
