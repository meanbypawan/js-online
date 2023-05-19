import React from "react";

function FivthChild({children}){
    console.log("Fivth Child Render..");
    console.log("Fivth Child Children :"+ children)
    return <>
      <h1>Fivth Child component</h1>
    </>
}

export default FivthChild;
//export default React.memo(FivthChild);