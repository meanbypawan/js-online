import { useEffect, useState } from "react";

function LifeCycle(){
  const [counter,setCounter] = useState(100);

  useEffect(()=>{
     console.log("userEffect first version...");
  });

  // componentDidMount
  useEffect(()=>{
    console.log("useEffet second version with []");
  },[]);

  //componentDidUpdate
  useEffect(()=>{
    console.log("useEffect Third Version with [counter]");
  },[counter]);

  // componentWillUnMount
  useEffect(()=>{
    return ()=>{
        console.log("useEffect fourth version ()=>{}");
    }
  },[]);
  return <>
    <h1>Life Cycle Component...</h1>
    <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>
  </>
}

export default LifeCycle;