import { useState } from "react";
import counter from "./counter";

function First({counter,incrementCounter,title}){
    return <>
      <h1>First Component...</h1>
      <button onClick={incrementCounter}>Counter: {counter} {title}</button>
    </>
}

/*
  We are not exporting First
  We are exporting componet return by counter(First) : NewComponent
*/
export default counter(First,5);