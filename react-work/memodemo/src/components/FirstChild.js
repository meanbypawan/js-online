import React from "react";

function FirstChild({title,counter}){

    console.log("First Child Render.....");
    return <>
      <h1>First Child : ({title} : {counter})</h1>
    </>
}

// memo :- Higher Order Componet
export default React.memo(FirstChild);