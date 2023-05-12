import { Component } from "react"

export default class StateDemoTwo extends Component{
   constructor(){
    super();
    this.state = {
        evenCounter: 0,
        oddCounter: 1,
        data: [10,20,30]
    }
   }
   updateArray = ()=>{
      this.setState({
        data: [...this.state.data,40]
      })
   }
   changeCounter = (n)=>{
      if(n == 1)
        this.setState({evenCounter: this.state.evenCounter+2});
      else
        this.setState({oddCounter: this.state.oddCounter + 2});  
   }
   test = ()=>{}
   render(){
    console.log("render called....");
    return <div>
        <hr/>
        <h1>State Demo Two </h1>
        Even Counter :{this.state.evenCounter}
        <button onClick={()=>{this.changeCounter(1)}}>Even Counter</button>
        Odd Counter :{this.state.oddCounter}
        <button onClick={()=>this.changeCounter(2)}>Odd Counter</button>
        <br/>
        {this.state.data.map((item,index)=><span>{item}</span>)}
        
        <button onClick={this.updateArray}>Update Array</button> 
    </div>
}
}