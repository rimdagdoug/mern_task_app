import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { log } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

// Call connectDB to establish database connection
connectDB();

app.use(express.json());
//Middleware
// const logger = (req,res,next) => {
//   console.log("Middleware ran");
//   console.log(req.method);
//   next();
// };


//Routes
app.get("/", (req,res) => {
  res.send("Home page")
});

// Create a task
app.post("/api/tasks", async(req,res) =>{
  console.log(req.body)
  res.send("Task created")
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
