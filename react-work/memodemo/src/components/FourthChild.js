import React from "react";

function FourthChild({customData}){
    console.log("Fourth Child Render..");
    return <>
      <h1>Fourth Child Component: ({customData.a},{customData.b})</h1>
    </>
}

//const memoizedComponent = React.memo(FourthChild);
export default React.memo(FourthChild);