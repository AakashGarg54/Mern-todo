import express from "express";
import { add, del, edit, list } from "../controllers/todo.controllers.js";

const router = express.Router();

router.post("/add", add);

router.put("/edit", edit);

router.delete("/delete", del);

router.get("/list", list);

export default router;
