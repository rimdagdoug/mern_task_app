//useState est un hook qui permet aux composants 
//fonctionnels de React de gérer leur propre état.
import { useState } from "react"
import Task from "./Task"
import TaskForm from "./TaskForm"
import { toast } from "react-toastify"
import axios from "axios"

const TaskList = () => {
  //useState renvoie un tableau où le premier 
  //élément est la valeur actuelle de l'état
  // (formData dans ce cas) et le second élément
  // est une fonction (setFormData) pour mettre
  // à jour cet état
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
  const createTask = async(e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input filed cannot be empty")
    }
    try {
      await axios.post("http://localhost:8000/api/tasks", formData);
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
      <Task></Task>
    </div>
    
  )
}

export default TaskList