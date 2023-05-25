import { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Headers from "../Header";
import axios from "axios";
import MasterContext from "../../context/MasterContext";

export default function Brand(){
    const {brandList} = useContext(MasterContext);
    return <>
     <Headers/>
      <div className="container-fluid">
        <div className="tm-main">
          <h1>Brands Component..</h1>
          <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {brandList.map((item,index)=><tr>
                    <td>{index+1}</td>
                    <td>{item.brandName}</td>
                    <td>{item.categoryId.categoryName}</td>
                    <td><button className="btn btn-outline-primary">Edit</button></td>
                    <td><button className="btn btn-outline-danger">Delete</button></td>
                </tr>)}
            </tbody>
          </table>
          <Footer/>
        </div>
      </div>
    </>
}