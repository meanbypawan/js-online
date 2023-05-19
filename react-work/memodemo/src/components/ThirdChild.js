import React from "react";

function ThirdChild({sayHello}){
    console.log("Third Child Render..");
    return <>
      <h1>Third Child</h1>
      <button onClick={sayHello}>Say Hello</button>
    </>
}

export default React.memo(ThirdChild);