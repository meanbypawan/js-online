import { Component } from "react";
import data from './data';

export default class StudentList extends Component{
    constructor(){
        super();
        this.state = {
          studentList: data,
          branchList: ["CS","IT","EC"],
          currentBranch: "all",
          duplicateRoll: false
        }
    }
    validateRoll = ()=>{
      let roll = this.roll.value;
      let status = this.state.studentList.some((student)=>student.roll == roll);
      this.setState({duplicateRoll: status});
    }
    save = ()=>{
       let roll = this.roll.value;
       let name = this.name.value;
       let branch = this.branch.value;
       let mobile = this.contact.value;
       let newStudent = {roll,name,branch,mobile};
       this.setState({studentList: [...this.state.studentList,newStudent]});
    }
    branchFilter = (event)=>{ // synthetic event
      let branch =  event.target.getAttribute("data-branch");
      this.setState({currentBranch: branch});
    }
    render(){
        return <div className="container mt-5">
          <div className="row">
            <div className="col-5">
                <input onBlur={this.validateRoll} id="roll" ref={(roll)=>this.roll = roll} type="text" placeholder="Roll Number" className="form-control"/>
                {this.state.duplicateRoll?<small className="text-danger">Roll already exists</small>:""}
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
                <select ref={(branch)=>this.branch=branch} className="form-control">
                    {this.state.branchList.map((branch,index)=><option value={branch}>{branch}</option>)}
                </select>
            </div>
          </div>  
          <div className="row mt-4">
            <div className="col-5">
               <button disabled={this.state.duplicateRoll} onClick={this.save} className="btn btn-success">Save</button>
            </div>
            <div clasName="col-4 offset-2">
                {this.state.branchList.map((branch)=><button data-branch={branch} onClick={this.branchFilter} className="btn btn-primary ml-2">{branch} ({this.state.studentList.filter((student)=>student.branch==branch).length})</button>
                )}

                <button data-branch="all" onClick={this.branchFilter} className="btn btn-warning ml-3">Total: ({this.state.studentList.length})</button>
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
                {this.state.studentList.filter((branchItem)=>branchItem.branch==this.state.currentBranch || this.state.currentBranch == "all").map((student,index)=><tr>
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