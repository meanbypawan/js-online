import { Product } from "../model/product.model.js"
export const list = (request,response,next)=>{
    Product.find().populate('categoryId').populate('brandId').then(result=>{
      return response.status(200).json({result: result,status: true});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({message:'Internal Server Error',status: false});
    })
}
export const save = (request,response,next)=>{
    let productImage = "";
    if(request.file)
      productImage = request.file.filename; 
    Product.create({
        categoryId: request.body.categoryId,
        brandId: request.body.brandId,
        productName: request.body.productName,
        productPrice: request.body.productPrice,
        productDescription: request.body.productDescription,
        productImage: productImage
    }).then(result=>{
       return response.status(200).json({result: result, status: true}); 
    }).catch(err=>{
        return response.status(500).json({message: 'Internal Server Error',status: false});
    })
    
}