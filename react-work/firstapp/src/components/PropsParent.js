import { Component } from "react";
import PropsFirst from "./PropsFirst";

export default class PropsParent extends Component{
    constructor(){
        super();
        this.state={
            name: "cheeku",
            address: "indore",
            contact: "9009112222"
        }
    }
    changeName = (updateName)=>{
       this.setState({name: updateName})
    }
    render(){
        return <>
           
           <h1>Props Parent......</h1>
           <h1>Name:{this.state.name}</h1>
           <hr/>
           <PropsFirst changeName={this.changeName} name={this.state.name} address={this.state.address} contact={this.state.contact}/>
        </>
    }
}