const express=require("express");
const Task =require("../models/taskModel");
const { createTask, getTask } = require("../controllers/taskControllers");
const router= express.Router();

// Create a task
router.post("/api/tasks",  createTask);

  //Get request
router.get("/api/tasks", getTask);

module.exports = router