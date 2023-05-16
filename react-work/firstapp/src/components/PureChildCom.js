import { Component, PureComponent } from "react";

export default class PureChildCom extends PureComponent{
    render(){
        console.log("Pure Component Render..");
        return <>
          <h1>..Pure Component..</h1>
        </>
    }
}