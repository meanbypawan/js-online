import { useEffect, useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import WebApi from "../../apis/WebApi";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addItemInToCart, updateCartItem } from "../../redux-config/CartSlice";

export default function Shop() {
    const [productList, setProductList] = useState([]);
    const [page,setPage] = useState(1);
    const {user,isLoggedIn} = useSelector((store)=>store.user);
    const {cartItems} = useSelector((store)=>store.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        loadProducts();
    }, []);
    const loadProducts = async () => {
        try {
            let response = await axios.get(WebApi.LOAD_PRODUCT+`?page=${page}`);
            setProductList([...productList,...response.products]);
            setPage(page+1);
        }
        catch (err) {
            console.log(err);
        }
    }
    const navigateToProductDescription = (product)=>{
       navigate("/product-description",{state:{product:product}});
    }
    const addToCart = async (product)=>{
        if(!isLoggedIn)
          toast.info("please login first");
        else{
          let status = false;
          if(cartItems.length!=0)
            status = cartItems.some((item)=>item.productId._id==product._id);
          if(status)
           toast.info("Product is already added in cart");
          else{
            dispatch(addItemInToCart({userId: user._id,productId:product._id}));
            dispatch(updateCartItem(product));
            toast.success("Product successfully added into the cart..");
          }
        }  
    }
    return <>
        <Header />
        <ToastContainer/>
        <div className="container">
            
                <InfiniteScroll
                  dataLength={productList.length}
                  next={loadProducts}
                  hasMore={productList.length<=100}
                  loader={<p>Loading...</p>}
                >
                <div className="row">    
                {productList.map((product,index)=><>
                  <div class="col-lg-4 col-md-6 col-sm-6 pb-1" style={{height:'400px'}}>
                    <div class="product-item bg-light mb-4">
                        <div class="product-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" src={product.thumbnail} alt="" style={{height:'200px'}} />
                            <div class="product-action">
                                <a class="btn btn-outline-dark btn-square" onClick={()=>addToCart(product)}><i class="fa fa-shopping-cart"></i></a>
                                <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                                <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                                <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <a class="h6 text-decoration-none text-truncate" href="">{product.title}</a>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <h5>{product.price}</h5><h6 class="text-muted ml-2"><del>{product.price}</del></h6>
                            </div>
                            <div class="d-flex align-items-center justify-content-center mb-1">
                                <small class="fa fa-star text-primary mr-1"></small>
                                <small class="fa fa-star text-primary mr-1"></small>
                                <small class="fa fa-star text-primary mr-1"></small>
                                <small class="fa fa-star text-primary mr-1"></small>
                                <small class="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                            <div>
                                <button onClick={()=>navigateToProductDescription(product)} className="btn btn-outline-warning mt-2">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>)}
                </div>
                </InfiniteScroll>
            
        </div>
    </>
}