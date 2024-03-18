const express=require("express");
const Task =require("../models/taskModel");
const { createTask, getTasks, getTask } = require("../controllers/taskControllers");
const router= express.Router();

// Create a task
router.post("/api/tasks",  createTask);

  //Get request
router.get("/api/tasks", getTasks);
//get one request

router.get("/api/tasks/:id",getTask);
module.exports = router