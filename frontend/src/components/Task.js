
import { FaEdit } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
const Task = ({task,index, deleteTask}) => {
  return (
    <div className="task">
        <p>
          <b>{index+1}</b>
          {task.name}
        </p>
        <div className="task-icons">
          <FaCheckDouble  color="green"/>
          <FaEdit color="purple" />  
          <RiDeleteBinLine  color="red" onClick={() => deleteTask(task._id)}/>
        </div> 


    </div>
  )
}

export default Task