import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

// Call connectDB to establish database connection
connectDB();

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("task2", userSchema);


app.get("/getUsers", async (req, res) => {
  const userData = await UserModel.find();
  res.json(userData);
});
