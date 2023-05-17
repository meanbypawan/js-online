import { useState } from "react";
/*
  this.state = {counter:100}

  this.setState({counter: 101})

*/
export default function Counter(){
    const [counter,setCounter] = useState(100);
    const [data,setData] =  useState([10,20,30]);
    const [obj,setObj] = useState({});
    const [name,setName] = useState("Rahil");

    const changeCounter = ()=>{
        setCounter(counter+1);
    }
    return <>
      <h1>Counter Component..</h1>
      {counter} <br/>
      <button onClick={changeCounter}>Change Counter</button>
    </>
}