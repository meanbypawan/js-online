import { Component, PureComponent } from "react";
import SimpleCom from "./SimpleCom";
import PureChildCom from "./PureChildCom";
// PureComponent :--- Memo (last option)
//
export default class ParentCom extends PureComponent{
    constructor(){
        super();
        this.state={
            counter: 100,
            data: [1,2,3]
        }
    }
    changeData = ()=>{
        this.setState({data: [...this.state.data,100]});
    }
    
    shouldComponentUpdate(newProps,newState){
       if(this.state.data.length == newState.data.length)
         return false;
       return true;  
    }
    componentDidMount(){
      // N/w call
    //   setInterval(()=>{
    //     this.setState({counter: 100});
    //   },3000);   
    }
    changeCounter = ()=>{
        this.setState({counter: this.state.counter+1});
    }
    render(){
        console.log("Parent Component Render..")
        return <>
          <h1>..Parent Component..</h1>
          <SimpleCom/>
          <PureChildCom/>
          {this.state.counter};
          <button onClick={this.changeData}>Change Data</button>
        </>
    }
}