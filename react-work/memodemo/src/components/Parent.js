import { useCallback, useMemo, useState } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
import FourthChild from "./FourthChild";
import FivthChild from "./FivthChild";

function Parent(){
    const [counter,setCounter] = useState(100);
    const [title,setTitle] = useState("Indore");
    
    const sayHello = useCallback(()=>{
      console.log("say helloo...");
    },[title]);

    const customData = {a:20,b:10};
    const memoizedData = useMemo(()=>customData,[]);
    
    
    console.log("Parent Render....");
    return <>
      <h1>Parent Components.......</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>
      <button onClick={()=>setTitle("Pune")}>{title} Change Title</button>
      <FirstChild title={title} counter={counter}/>
      <SecondChild/>
      <ThirdChild sayHello = {sayHello}/>
      <FourthChild customData={memoizedData}/>
      <FivthChild>
        <i>Hello this is the children of Fivth Child</i>
      </FivthChild>
    </>
}
export default Parent;