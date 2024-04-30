import express from "express";
import {
  active,
  add,
  del,
  edit,
  list,
} from "../controllers/todo.controllers.js";

const router = express.Router();

router.post("/add", add);

router.put("/edit/:_id", edit);

router.put("/active/:_id", active);

router.delete("/delete/:_id", del);

router.get("/list", list);

export default router;
