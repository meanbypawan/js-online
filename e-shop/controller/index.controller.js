import Product from "../model/product.model.js";

// here action is middleware
export const indexAction = (request,response,next)=>{
    Product.getList()
    .then((results)=>{
        return response.render("index.ejs",{
            productList: results
        });
    })
    .catch(err=>{
        console.log(err);
    })
}