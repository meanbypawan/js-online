import { useReducer } from "react";

function Reducer(){
    /*
      INCREMENT: counter+1
      DECREMENT: counter-1
    */
    const [state,dispatch] = useReducer((state,action)=>{
       switch(action.type){
         case "INCREMENT": return {counter: state.counter+action.payload};
         case "DECREMENT": return {counter: state.counter-action.payload};
         default: return state;
       }
    },{counter:100});

    const [data,dispatchData] = useReducer((state,action)=>{
       switch(action.type){
          case "PUSH": return {dataList: [...state.dataList,action.payload]};

          case "POP":  let data = state.dataList;
                       data.pop();
                       return {dataList: data}; 
          
          case "REMOVE": let originalData = state.dataList;
                         originalData.splice(action.payload,1);
                         return {dataList: originalData};    
       }
    },{dataList:[10,20,30]});

    return <>
      <h1>Reducer Component..</h1>
      <button onClick={()=>dispatch({type:'INCREMENT',payload:5})}>+</button>
        {state.counter}
      <button onClick={()=>dispatch({type:'DECREMENT',payload:2})}>-</button>
      <br/>
      {data.dataList.map((item,index)=><h1>{item}</h1>)}
      <button onClick={()=>dispatchData({type:"PUSH", payload:500})}>PUSH</button>&nbsp;&nbsp;
      <button onClick={()=>dispatchData({type:'POP'})}>POP</button>&nbsp;&nbsp;
      <button onClick={()=>dispatchData({type:"REMOVE", payload: 2})}>REMOVE</button>
    </>
}

export default Reducer;