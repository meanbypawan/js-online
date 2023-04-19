import Product from "../model/product.model.js";

export const signUpPage = (request,response,next)=>{
  return response.render("signup.ejs");
}

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