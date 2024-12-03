import express from "express";
import { createStudent, getStudents } from "../Controllers/studentController.js";



const router = express.Router();

router.post("/create", createStudent);
router.get("/getStudent", getStudents);

export default router;