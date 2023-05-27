import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux-data/CategorySlice";

export default function AddCategory(){
    const [categoryName,setCategoryName] = useState("");
    const dispatch = useDispatch();
    const saveCategory = async ()=>{
      try{
         let response = await axios.post("http://localhost:3000/category/save",{categoryName});
         if(response.data.status){
            console.log(response.data);
            dispatch(add(response.data.data));
            window.alert("Category Saved....");
         }
      }
      catch(err){
        console.log(err);
      }
    }
    return <>
     <div className="row">
      <div className="col-md-6">
         <input onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" className="form-control"/>
      </div>
      <div className="col-md-2 ml-3">
        <button onClick={saveCategory} className="btn btn-success">Save</button>
      </div>
     </div>    
       
    </>
}