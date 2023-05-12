import { Component } from "react";

export default class StateDemo extends Component{
    constructor(){
        super();
        this.state = {
            counter: 100,
            evenCounter: 0,
            oddCounter : 1
        };
    }
    incrementCounter = ()=>{
       //this.state.counter = this.state.counter+1;
       //console.log(this.state.counter);
       this.setState({counter: this.state.counter+1});
       //this.forceUpdate();
    }
    evenCounter = ()=>{
        this.setState({evenCounter: this.state.evenCounter+2});
    }
    oddCounter=  ()=>{
        this.setState({oddCounter: this.state.oddCounter+2});
    }
    render(){
        console.log("render called....");
        return <div>
            <hr/>
            <h1>State Demo Component...</h1>
            {this.state.counter}
            <button onClick={this.incrementCounter}>Increment Counter</button>
            Even Counter :{this.state.evenCounter}
            <button onClick={this.evenCounter}>Even Counter</button>
            Odd Counter :{this.state.oddCounter}
            <button onClick={this.oddCounter}>Odd Counter</button> 
        </div>
    }
}