import { useState } from "react";

const counter = (OriginalComponent,incrementorValue)=>{
   // OriginalComponent = First
   return function NewComponent(props){
    const [counter,setCounter] = useState(100);
    const incrementCounter = ()=>{
        setCounter(counter+incrementorValue);
    } 
    return <OriginalComponent {...props} counter={counter} incrementCounter={incrementCounter}/>
   
   }
}

export default counter;