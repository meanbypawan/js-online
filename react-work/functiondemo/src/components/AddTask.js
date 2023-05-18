import { useRef } from "react";

function AddTask({priorityList,saveTask}){
    let titleInput = useRef(null);
    let priorityInput = useRef(null);
    console.log("Add Task Render........");
    return <>
       <div className="row">
           <div className="col-5">
             <input ref={titleInput} type='text' placeholder='Task Title' className="form-control"/>
           </div>
           <div className="col-5 offset-1">
             <select ref={priorityInput} className="form-control">
              {priorityList.map((priority,index)=><option key={index} value={priority.priorityId}>{priority.priorityValue}</option>)}
             </select>
           </div>
           <button onClick={()=>saveTask(titleInput.current.value,priorityInput.current.value)} className="btn btn-success">Add Task</button>
         </div>
    </>
}

export default AddTask;