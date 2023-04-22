import Product from "../model/product.model.js";

export const signUpPage = (request,response,next)=>{
  return response.render("signup.ejs");
}

export const indexAction = (request,response,next)=>{
    console.log(request.session);
    Product.getList()
    .then((results)=>{
        return response.render("index.ejs",{
            productList: results,
            currentUser: request.session.currentUser
        });
    })
    .catch(err=>{
        console.log(err);
    })
}
export const signInPage = (request,response,next)=>{
    return response.render("signin.ejs");
}