import { useRef, useState } from 'react';
import data from './data';
import AddTask from './AddTask';
export default function ToDo(){
    const [taskList,setTaskList] = useState(data);
    const [status, setStatus] = useState("active");
    const [priorityList,setPriorityList] = useState([{priorityId:1, priorityValue: "Low"},{priorityId:2, priorityValue: "Medium"},{priorityId:3, priorityValue: "High"}]);
    const [activeButtonStatus,setActiveButtonStatus] = useState(true);
    const [deactiveButtonStatus,setDeactiveButtonStatus] = useState(false);
    
    const showListByStatus = (taskStatus)=>{
       setStatus(taskStatus);
       if(taskStatus == 'active'){
         setActiveButtonStatus(true);
         setDeactiveButtonStatus(false);
       }  
       else{
         setActiveButtonStatus(false);
         setDeactiveButtonStatus(true);
       }
    }
    const changeTaskStatus = (task,status)=>{
      // index = 2 
      let index = taskList.findIndex((elementTask)=>elementTask.id == task.id);
      let taskObj = taskList[index];
      taskObj.status = status; 
      taskList.splice(index,1);
      setTaskList([...taskList,taskObj]);
    }
    const saveTask = (title,pid)=>{
      let id = taskList.length+1;
      let date = new Date();
      date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      let status = "active";
      setTaskList([...taskList,{title,pid,id,date,status}]);
    }
    console.log("To Do Render................");
    return <>
      <div className="container mt-5">
         <AddTask priorityList={priorityList} saveTask={saveTask}/>
         <div className="row mt-5 mb-5">
           <div className="col-5">
            <button onClick={()=>showListByStatus('active')} disabled={activeButtonStatus} className="btn btn-success">Active({taskList.filter((task)=>task.status=="active").length})</button>
            <button onClick={()=>showListByStatus('deactive')} disabled={deactiveButtonStatus} className="btn btn-primary ml-3">Deacitve({taskList.filter((task)=>task.status=="deactive").length})</button>
           </div>
         </div>
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
                    {status=='active'?<button onClick={()=>changeTaskStatus(task,'deactive')} className="btn btn-outline-danger">Deactive</button>:<button onClick={()=>changeTaskStatus(task,'active')} className="btn  btn-outline-success">Active</button>}
                </td>
             </tr></>)} 
           </tbody>       
         </table>
      </div>
    </>
}