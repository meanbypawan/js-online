import Category from "../model/category.model.js";

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