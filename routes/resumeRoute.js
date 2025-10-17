import express from "express";
import {
  createResume,
  deleteResume,
  updateResume,
  getPublicResumeByid,
  getResumeById,
} from "../controllers/ResumeController.js";
import protect from "../middlewares/authMiddleware.js";
import upload from "../configs/multer.js";

const resumeRoute = express.Router();

resumeRoute.post("/create", protect, createResume);
resumeRoute.delete("/delete/:resumeId", protect, deleteResume);
resumeRoute.put("/update", upload.single("image"), protect, updateResume);
resumeRoute.get("/public/:resumeId", getPublicResumeByid);
resumeRoute.get("/get/:resumeId", protect, getResumeById);

export default resumeRoute;
