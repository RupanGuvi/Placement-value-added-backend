import express from "express";
import { createSubject, getSubjects } from "../Controllers/subjectController.js";


const router = express.Router();

router.post("/create", createSubject);
router.get("/getSubject", getSubjects);

export default router;