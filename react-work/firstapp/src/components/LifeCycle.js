import { Component } from "react";
/*
  Mounting (Component is visible on UI/ component loaded):-
    constructor
    getDeriveStateFromProps
    render()
    componentDidMount
  
  Updating:-  
   Derived state from props called...
   should component update callled....
   Render Method called...
   Before Snapshot called....
*/
export default class LifeCycle extends Component{
   constructor(){
    super();
    console.log("Constructor called.....");
    this.state = {
        counter: 0,
        status: true
    }
   }
   render(){
      console.log("Render Method called...");
      return <>
        <h1>Life Cycel Demo...</h1>
        {this.state.counter}<br/>
        <button onClick={()=>this.setState({counter: this.state.counter+1})}>Change Counter</button>
      </>
   } 
//    static getDerivedStateFromProps(props,state){
//     if(state.status){
//       if(props.color == "red")    
//         return {counter: 1000, status: false};
//       else if(props.color == 'green')
//         return {counter: 500, status: false};
//       else if(props.color == "blue")
//         return {counter: 700, status: false};
//     }   
//     return state; 
          
//    }
   shouldComponentUpdate(props,state){
      console.log("should component update callled....");
      return true;
   }
//    getSnapshotBeforeUpdate(prevProps, prevState){
//     console.log("SnapshotBeforeUpdate..............");
//     console.log(prevProps);
//     console.log(prevState);
//     console.log("..............");
//    }
   componentDidMount(){
     console.log("Component Mounted...");
   }  
   componentDidUpdate(){
      console.log("Component Did update called...");
   }
   componentWillUnmount(){
      console.log("Component will unmount called...");
   }
}