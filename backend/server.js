const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB.js");
const dotenv = require("dotenv");
const path = require("path"); 
const Task = require("./models/taskModel.js");
const taskRoutes= require("./routes/taskRoute.js");



dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

// Call connectDB to establish database connection
connectDB();
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(taskRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Home page")
});





//

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
