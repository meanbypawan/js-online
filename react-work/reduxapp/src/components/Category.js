import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCategory, remove } from "../redux-data/CategorySlice";
import axios from "axios";
import AddCategory from "./AddCategory";

export default function Category() {
    const { categoryList, isLoading, error } = useSelector((store) => store.category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory());
    }, []);
    const deleteCategory = async (event)=>{
      try{  
        let categoryId = event.target.getAttribute("data-categoryId");
        let response = await axios.get("http://localhost:3000/category/delete",{params:{id: categoryId}});
        if(response.data.status){
            dispatch(remove(categoryId));
            window.alert("category removed....");
        }
      }catch(err){
        console.log(err);
      }
    }
    return <>
        <div className="container mt-5">
            <AddCategory/>
            <hr/>
            {isLoading ? <> <div class="spinner-border text-muted"></div>
                <div class="spinner-border text-primary"></div>
                <div class="spinner-border text-success"></div>
                <div class="spinner-border text-info"></div>
                <div class="spinner-border text-warning"></div>
                <div class="spinner-border text-danger"></div>
                <div class="spinner-border text-secondary"></div>
                <div class="spinner-border text-dark"></div>
                <div class="spinner-border text-light"></div></> : ""}
             <table className="table">
                <thead>
                    <tr>
                        <td>S.no</td>
                        <td>Category Name</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {categoryList.map((category,index)=><tr key={index} id={"row"+category._id}>
                        <td>{index+1}</td>
                        <td>{category.categoryName}</td>
                        <td><button className="btn btn-outline-primary">Edit</button></td>
                        <td>
                            <button data-categoryId={category._id} onClick={deleteCategory} className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>)}
                </tbody>
             </table>   
        </div>
    </>
}