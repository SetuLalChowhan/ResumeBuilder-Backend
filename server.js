import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "mongoose";
import connectDB from "./configs/db.js";
import userRoute from "./routes/userRoutes.js";
import resumeRoute from "./routes/resumeRoute.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Database Connection

await connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/resumes", resumeRoute);
app.use("/api/ai", aiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
