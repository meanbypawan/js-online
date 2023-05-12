import { Component } from "react";

export default class Binding extends Component{
    render(){
        var status = 200;
        var data = "xyz..";
        var dataList = ["rahil","sahil","cheeku","peeku"];
        var dataListTwo = [
            <p>Rahil</p>,
            <p>Sahil</p>,
            <p>Cheeku</p>,
            <p>Peeku</p>
        ]
        return <div>
            <hr/>
            <h1>Binding Component...</h1>
            <h1>{status} {data}</h1>
            <div>{dataList}</div>
            <div>{dataListTwo}</div>
            <hr/>
            {dataList.map((item,index)=><p>{item}</p>)}
        </div>
    }
}