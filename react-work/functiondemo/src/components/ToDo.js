import { useState } from 'react';
import data from './data';
export default function ToDo(){
    const [taskList,setTaskList] = useState(data);
    const [status, setStatus] = useState("active");
    const [priorityList,setPriorityList] = useState([{priorityId:1, priorityValue: "Low"},{priorityId:2, priorityValue: "Medium"},{priorityId:3, priorityValue: "High"}]);
    return <>
      <div className="container mt-5">
         <table className="table">
           <thead>
             <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Date</td>
                <td>Priority</td>
                <td>Operation</td>
             </tr>
           </thead> 
           <tbody>
             
             {taskList.filter((task)=>task.status==status).sort((o1,o2)=>{return o2.pid-o1.pid}).map((task,index)=><>
                <tr style={{backgroundColor: task.pid==3 ? 'red': task.pid==2?'orange': 'green'}} key={index}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{priorityList.find((prioriyObj)=>prioriyObj.priorityId==task.pid).priorityValue}</td>
                <td>
                    <button className="btn btn-outline-danger">Deactive</button>
                </td>
             </tr></>)} 
           </tbody>       
         </table>
      </div>
    </>
}