import { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Headers from "../Header";
import axios from "axios";
import MasterContext from "../../context/MasterContext";
import api from "../../api/webApi";
export default function Category({setCategoryList}){
    const [categoryName,setCategoryName] = useState("");   
    const {categoryList} = useContext(MasterContext);
    const saveCategory = async(event)=>{
      try{  
        event.preventDefault();// To Cancel the event
        let response = await axios.post("http://localhost:3000/category/save",{categoryName});
        if(response.data.status){
          window.alert("category saved..");
          setCategoryList([...categoryList,response.data.data]);
        }  
      }
      catch(err){
        console.log(err);
      }
    }
    const deleteCategory = async (event)=>{
     try{ 
      if(window.confirm("Are you sure ?")){
      let categoryId = event.target.getAttribute("data-categoryId");
      let rowIndex = event.target.getAttribute("data-row");
      let response = await axios.get(api.DELETE_CATEGORY,{params: {id: categoryId}});
      if(response.data.status){
        window.alert("Category Deleted...");
        document.getElementById(rowIndex).remove();
      }
     }
     }
     catch(err){
      console.log(err);
     } 
    }
    return <>
     <Headers/>
      <div className="container-fluid">
        <div className="tm-main">
        <form onSubmit={saveCategory}>
          <div className="row">
            <div className="col-md-6">
                <input type="text" onChange={(event)=>setCategoryName(event.target.value)} className="form-control"/>
             </div>
             <div className ="col-md-2">
                <button className="btn btn-success">Save</button>
             </div>
             
          </div>
         </form>   
          <h1>Category Component..</h1>
          <div>
          </div>      
          {categoryList.length==0? <h1>Data Not Available</h1>:<>
             <table className="table">
                <tr>
                    <td>S.no</td>
                    <td>Category</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                {categoryList.map((category,index)=><tr id={"row"+index} key={index}>
                    <td>{index+1}</td>
                    <td>{category.categoryName}</td>
                    <td><button className="btn btn-outline-primary">Edit</button></td>
                    <td><button data-categoryId={category._id} data-row={"row"+index} onClick={deleteCategory} className="btn btn-outline-danger">Delete</button></td>
                </tr>)}
             </table>
          </>}
         <Footer/>
        </div>
      </div>
    </>
}