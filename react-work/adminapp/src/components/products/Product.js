import { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Headers from "../Header";
import axios from "axios";
import ProductContext from "../../context/ProductContext";

export default function Product() {
    const {productList} = useContext(ProductContext);
    return <>
        <Headers />
        <div className="container-fluid">
            <div className="tm-main">
                <h1>Product Component..</h1>
                {productList.length == 0 ? <>
                    <div class="spinner-border text-muted"></div>
                    <div class="spinner-border text-primary"></div>
                    <div class="spinner-border text-success"></div>
                    <div class="spinner-border text-info"></div>
                    <div class="spinner-border text-warning"></div>
                    <div class="spinner-border text-danger"></div>
                    <div class="spinner-border text-secondary"></div>
                    <div class="spinner-border text-dark"></div>
                    <div class="spinner-border text-light"></div>
                </> : ''}
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={"http://localhost:3000/images/" + product.productImage} style={{ width: '100px', height: '100px' }} />
                            </td>
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                            <td>
                                <button className="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <Footer />
            </div>
        </div>
    </>
}