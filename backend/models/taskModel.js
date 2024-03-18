const mongoose = require("mongoose");
//how xe organise th schema
const taskSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please add a task"]
        },
        completed:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Task=mongoose.model("Task",taskSchema);

module.exports = Task;