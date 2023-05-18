import React from "react";

function FirstChild(){

    console.log("First Child Render.....");
    return <>
      <h1>First Child</h1>
    </>
}

// memo :- Higher Order Componet
export default React.memo(FirstChild);