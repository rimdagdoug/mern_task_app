
import { FaEdit } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
const Task = () => {
  return (
    <div className="task">
        <p>
          <b>1.</b>
          Task1
        </p>
        <div className="task-icons">
          <FaCheckDouble  color="green"/>
          <FaEdit color="purple" />  
          <RiDeleteBinLine  color="red"/>
        </div>


    </div>
  )
}

export default Task