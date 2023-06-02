import { useLocation } from "react-router-dom";
import Header from "../header/Header";

export default function ProductDescription(){
    const location = useLocation();
    let {product} = location.state;
    console.log(product);
    return <>
      <Header/>
      <div className="container">
      <div className="row">
        <div className="col-md-5">
            <img src={product.thumbnail} style={{width:'100%', height: '300px'}}/>
        </div>
        <div className="col-md-4 offset-1">
            <h1>{product.title} ({product.brand})</h1>
            <h2>{product.price}</h2>
            <h3>{product.description}</h3>
            <div>
                <button className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
      </div>
      </div>
    </>
}