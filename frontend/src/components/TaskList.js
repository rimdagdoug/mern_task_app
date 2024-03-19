import Task from "./Task"
import TaskForm from "./TaskForm"


const TaskList = () => {
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm></TaskForm>
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