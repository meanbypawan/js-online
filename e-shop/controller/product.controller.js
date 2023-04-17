import Product from "../model/product.model"

export const productPage = (request,response)=>{
  Product.getList()
  .then(result=>{
     return response.render("product.ejs",{
        productList: result
     })
  })
  .catch(err=>{
    console.log(err);
  })
}