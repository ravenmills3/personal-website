import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
connectDB();

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // If Mongoose not found error, set to 404 and change message
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

app.get("/", (req, res) => res.send("API running"));
app.listen(port, () => console.log(`Server started on port ${port}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.use(cookieParser());
