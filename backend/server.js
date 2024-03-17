const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB.js");
const dotenv = require("dotenv");
const path = require("path"); 
const Task = require("./model/taskModel.js");



dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

// Call connectDB to establish database connection
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("Home page")
});

// Create a task
app.post("/api/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//Get request
app.get("/api/tasks", async(req,res) => {
  try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
});

//

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
