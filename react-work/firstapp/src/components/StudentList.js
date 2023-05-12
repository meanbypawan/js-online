import { Component } from "react";
import data from './data';
export default class StudentList extends Component{
    constructor(){
        super();
        this.state = {
          studentList: data
        }
    }
    save = ()=>{
       let roll = this.roll.value;
       let name = this.name.value;
       let branch = this.branch.value;
       let mobile = this.contact.value;
       let newStudent = {roll,name,branch,mobile};
       this.setState({studentList: [...this.state.studentList,newStudent]});
    }
    render(){
        return <div className="container mt-5">
          <div className="row">
            <div className="col-5">
                <input id="roll" ref={(roll)=>this.roll = roll} type="text" placeholder="Roll Number" className="form-control"/>
            </div>
            <div className="col-5">
                <input id="name" ref={(name)=>this.name = name} type="text" placeholder="Name" className="form-control"/>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-5">
                <input id="contact" ref={(contact)=>this.contact=contact} type="text" placeholder="Contact number" className="form-control"/>
            </div>
            <div className="col-5">
                <input id="branch" ref={(branch)=>this.branch=branch} type="text" placeholder="Enter Branch" className="form-control"/>
            </div>
          </div>  
          <div className="row mt-4">
            <div className="col-5">
               <button onClick={this.save} className="btn btn-success">Save</button>
            </div>
          </div>
          <table className="table mt-4">
            <thead>
                <tr>
                    <td>Roll</td>
                    <td>Name</td>
                    <td>Branch</td>
                    <td>Mobile</td>
                </tr>
            </thead>
            <tbody>
                {this.state.studentList.map((student,index)=><tr>
                    <td>{student.roll}</td>
                    <td>{student.name}</td>
                    <td>{student.branch}</td>
                    <td>{student.mobile}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
    }
}