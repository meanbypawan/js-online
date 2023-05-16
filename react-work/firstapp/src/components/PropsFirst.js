import { Component } from "react";

export default class PropsFirst extends Component{
    
    constructor(props){
        super(props);
        console.log(this.props);
    }
    updateName=()=>{
       let name = this.name.value;
       this.props.changeName(name);
    }
    render(){
        let {name,contact,address} = this.props;
        return <>
          <h1>Props First Component</h1>
          <p>Name: {name}</p>
          <p>Address : {address}</p>
          <p>Contact : {contact}</p>

          <input ref={(name)=>this.name = name} type="text"/>
          <button onClick={this.updateName}>Change Name</button>
        </>
    }
}