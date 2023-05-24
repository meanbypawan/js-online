import { Brand } from "../model/brand.model.js";
import { Category } from "../model/category.model.js";

export const deleteCategory = (request,response,next)=>{
  Category.deleteOne({_id: request.query.id})
  .then(result=>{
    Brand.deleteMany({categoryId: request.query.id}).then(result=>{
      return response.status(200).json({message: 'Category deleted',status: true});
    }).catch(err=>{
      console.log(err);
      return response.status(500).json({message: 'Internal Server Error', status: false});
    })
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({message: 'Internal Server Error',status: false});
  });
}

export const categoryList = (request,response,next)=>{
  Category.find().then(result=>{
    return response.status(200).json({status: true, result: result});
  }).catch(err=>{
    return response.status(500).json({status: false, result: 'Internal Server Error'});
  });
}

export const saveCategory = (request,response,next)=>{
  Category.create(request.body).then(result=>{
    return response.status(200).json({status: true,data : result});
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({status: false, data:"Internal server error"});
  });
}