import express from "express";
import { createMarks, getMarks } from "../Controllers/marksController.js";

const router = express.Router();

router.post("/create", createMarks);
router.get("/getMarks", getMarks);

export default router;