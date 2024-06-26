import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./api/routes/user.route.js";
import authRouter from "./api/routes/auth.route.js";
import listingRouter from "./api/routes/listing.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors

dotenv.config();

mongoose
  .connect(process.env.mongo)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Use cors middleware

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
