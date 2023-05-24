import { useEffect, useState } from "react";
import Footer from "../Footer";
import Headers from "../Header";
import axios from "axios";

export default function Category(){
 const [categoryList,setCategoryList] = useState([]);
 const [error,setError] = useState(false);  
 const [categoryName,setCategoryName] = useState("");   
    useEffect(()=>{
        loadCategories();
    },[]);
    
    const loadCategories = async()=>{
      try{  
        let response = await axios.get("http://localhost:3000/category/list");
        if(response.data.status)
          setCategoryList(response.data.result);
      }
      catch(e){
        setError(true);
      }  
    }
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
          {error ? <span>Oops! something went wrong</span>:''}  
          <h1>Category Component..</h1>
          {categoryList.length==0? <h1>Data Not Available</h1>:<>
             <table className="table">
                <tr>
                    <td>S.no</td>
                    <td>Category</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                {categoryList.map((category,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{category.categoryName}</td>
                    <td><button className="btn btn-outline-primary">Edit</button></td>
                    <td><button className="btn btn-outline-danger">Delete</button></td>
                </tr>)}
             </table>
          </>}
          <Footer/>
        </div>
      </div>
    </>
}