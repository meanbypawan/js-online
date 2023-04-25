import Product from "../model/product.model.js";

export const saveInBulk = async (request,response,next)=>{
    try{ 
      let productList = request.body.products;
      for(let product of productList){
       let {title, description,price,discountPercentage,rating,stock,brand,category,thumbnail} = product;
       let imageArray = "";
       for(let image of product.images){
         imageArray = imageArray+image+" ";
       }
       await Product.create({
         title:title, description:description,price:price,discountPercentage:discountPercentage,rating:rating,stock:stock,brand:brand,categoryname:category,thumbnail:thumbnail,imageArray:imageArray
       });
     }
     return response.status(200).json({message: 'Product saved', status: true});
    }
    catch(err){
      console.log(err);
      return response.status(500).json({error: 'Internal Server Error', status: false});
    }
 }