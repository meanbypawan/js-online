import { useState } from "react";
import counter from "./counter";

function Second({counter,incrementCounter,name,age}){
    return <>
      <h1>Second Component</h1>
      <button onMouseOver={incrementCounter}>Counter: {counter} {name} {age}</button>
    </>
}

export default counter(Second,2);