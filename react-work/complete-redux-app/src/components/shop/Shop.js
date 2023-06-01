import { useEffect, useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import WebApi from "../../apis/WebApi";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Shop() {
    const [productList, setProductList] = useState([]);
    const [page,setPage] = useState(1);
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
    return <>
        <Header />
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
                                <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
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
                        </div>
                    </div>
                </div>
                </>)}
                </div>
                </InfiniteScroll>
            
        </div>
    </>
}