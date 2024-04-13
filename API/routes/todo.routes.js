import express from "express";
import { add, del, edit, list } from "../controllers/todo.controllers.js";

const router = express.Router();

router.get("/add", add);

router.get("/edit", edit);

router.get("/delete", del);

router.get("/list", list);

export default router;
