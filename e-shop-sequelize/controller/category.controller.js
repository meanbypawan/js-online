import { Op } from 'sequelize';
import {Category, Product} from '../model/association.js'

// export const fetchCategory = (request,response,next)=>{
//   // Eager Loading
//   Category.findAll({
//     include: Product
//   })
//   .then(result=>{
//     return response.status(200).json({categories: result, status: true});
//   }).catch(err=>{
//      return response.staus(500).json({error: 'Server Error', status: false});
//   })
// }
// export const fetchCategory = (request,response,next)=>{
//   // Eager Loading
//   Category.findAll({
//     //include: {model: Product, attributes:{exclude: ["createdAt","updatedAt"]}}
//     include: {model: Product, attributes:["title","price"]}
//   })
//   .then(result=>{
//     return response.status(200).json({categories: result, status: true});
//   }).catch(err=>{
//      return response.staus(500).json({error: 'Server Error', status: false});
//   })
// }
export const fetchCategory = (request,response,next)=>{
  // Eager Loading
  Category.findAll({
    include: {
      model: Product, 
      attributes:["title","price"],
      where:{price:{[Op.gt]: 200}}
    }
  })
  .then(result=>{
    return response.status(200).json({categories: result, status: true});
  }).catch(err=>{
     return response.staus(500).json({error: 'Server Error', status: false});
  })
}
export const saveInBulk = async(request,response,next)=>{
  let categories = request.body.categories;
  try{
    for(let category of categories){
       await Category.create({categoryName: category});
    }
    return response.status(200).json({message: 'category savedd'});
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: 'Server Error'});
  }
}