import { Component } from "react";

export default class StateChange extends Component{
    constructor(){
        super();
        this.state={
            counter: 100
        }
    }

    changeCounter = ()=>{
      this.setState({counter: this.state.counter+1});
    }
    render(){
        console.log("render()-called....");
        return <>
           {this.state.counter}
           <br/>
           <button onClick={this.changeCounter}>Change Counter</button>
        </>
    }
    shouldComponentUpdate(newProps,newState){
        if(newState.counter%2==0)
          return true;
        return false;  
    }
}
/*
  React :- PureComponet (shouldComponentUpdate)
  
*/