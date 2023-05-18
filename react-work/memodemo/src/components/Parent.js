import { useState } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

function Parent(){
    const [counter,setCounter] = useState(100);
    console.log("Parent Render....");
    return <>
      <h1>Parent Components.......</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>
      <FirstChild/>
      <SecondChild/>
    </>
}
export default Parent;