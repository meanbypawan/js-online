import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../navigation/Navigation";

function ProductDescription(){
  const location = useLocation();
  const mainImage = useRef();
  const currentImage = useRef();
  let {product} = location.state;
  const changeImage = (event)=>{
    let temp = mainImage.current.src;
    mainImage.current.src = event.target.src;
    event.target.src = temp;
  }
  return <>
   <Navigation/>
   <div style={{marginLeft: '60px'}}>
     <div className="row">
       <div className="col-md-5 bg-white">
          <img ref={mainImage} src={product.thumbnail} style={{padding: '20px',width: '100%', height:'500px'}}/>
          <div className="row" style={{padding: '20px'}}>
            {product.images.map((image,index)=><div className="col-2 m-auto" key={index}>
                 <img  onClick={changeImage} src={image} style={{width:'100%', height:'100px', borderRadius:'50%'}}/>
             </div>)}
          </div>
       </div>
       <div className="col-md-6 bg-white ml-5 p-5">
         <h2>{product.title} ({product.brand})</h2>
         <div className="text-primary">
            <small class="fas fa-star"></small>
            <small class="fas fa-star"></small>
            <small class="fas fa-star"></small>
            <small class="fas fa-star-half-alt"></small>
            <small class="far fa-star"></small>
            <small className="text-dark ">&nbsp;&nbsp;&nbsp;(99 reviews)</small>
         </div>
         <h2 className="mt-3 mb-3 text-success">Rs. {product.price}</h2>
         <p>{product.description}</p>
         <h4>Features</h4>
         <ul>
           <li>lorem fd er vcvn ere loremipsum </li>
           <li>lorem fd er vcvn ere loremipsum vcvn ere loremipsum </li>
           <li>lorem fd er vcvn loremipsum lorem fd er vcvn loremipsum</li>
           <li>lorem fd er vcvn ere loremipsum lorem fd er vcvn ere loremipsum lorem fd er vcvn ere loremipsum </li>
           <li>lorem fd er vcvn ere loremipsum </li>
         </ul>
         <div className="row mt-5 mb-5 pl-3">
            <button className="font-weight-bold" style={{fontSize: '30px',width:'50px', height:'50px', backgroundColor: '#ffd438', border: 'none'}}>-</button>
            <div style={{fontSize: '30px',width:'50px', height:'50px',backgroundColor:'#f3ecec', border: 'none'}}></div>
            <button className="font-weight-bold" style={{fontSize: '30px',width:'50px', height:'50px', backgroundColor: '#ffd438', border: 'none'}}>+</button>
            <button className="btn btn-primary px-3 ml-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
         </div>
       </div>
     </div> 
   </div> 
  </>
}

export default ProductDescription;