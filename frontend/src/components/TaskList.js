//useState est un hook qui permet aux composants 
//fonctionnels de React de gérer leur propre état.
import { useEffect, useState } from "react"
import Task from "./Task"
import TaskForm from "./TaskForm"
import { toast } from "react-toastify"
import axios from "axios"
import loadingImg from "../assets/loader.gif";

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState(
    {
      name:"",
      completed: false
    }
  )

  const {name} = formData

  const handleInputChange = (e) => {
    const {name,value} = e.target
    setFormData({...formData,[name]: value})
  };

  const getTasks= async ()=> {
    setIsLoading(true)
    try {
     const {data}= await axios.get("/api/tasks");
     setTasks(data);
     setIsLoading(false)
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getTasks()
  },[])

  const createTask = async(e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input filed cannot be empty")
    }
    try {
      await axios.post("/api/tasks", formData);
      toast.success("Task added successfuly");
      setFormData({...formData,name:""});
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm name={name}
       handleInputChange={handleInputChange}
       createTask={createTask}
       ></TaskForm>
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks:</b>0
        </p>
        <p>
          <b>Completed Tasks:</b>0
        </p>
      </div>
      <hr></hr>
      {isLoading && (
        <div className="--flex-center">
          <img src={loadingImg} alt="loading"/>
        </div>
      )}

      {
        !isLoading && tasks.length ===0 ? (
          <p className="--py">No Task added. Please add a Task</p>
        ) : (
          <>
          {
            tasks.map((task, index) => {
              return (
                <Task key={task._id} task={task} index={index}/>
              )
            })
              
          }
          </>
        )
      }
      
     
    </div>
    
  )
}

export default TaskList