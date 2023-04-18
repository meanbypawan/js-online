import Category from "../model/category.model.js";
import Product from "../model/product.model.js"

export const productPage = (request,response)=>{
  Promise.all([Product.getList(),Category.getCategoryList()])
  .then(results=>{
    return response.render("product.ejs",{
      productList: results[0],
      categoryList: results[1]
    });
  }).catch(err=>{
    console.log(err);
  });
}