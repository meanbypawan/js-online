import Cart from "../model/Cart.model.js";
import Order from "../model/order.model.js";
import Product from "../model/product.model.js";
import User from "../model/user.model.js"
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
export const allUserInfo = (request,response,next)=>{
  User.findOne({
    where: {id: request.body.id},
    include:[
      {
        model: Cart,
        include: Product
      },
      {
         model: Order,
         include: Product
      }
    ]
  }).then(result=>{
    return response.status(200).json({userInfo: result, status: true});
  }).catch(err=>{
    return response.status(500).json({error: 'Error', status: false});
  })
}
export const signIn = async (request,response,next)=>{
 try{ 
  let user = await User.findOne({raw: true,where:{email: request.body.email}});
  let status = user ? User.checkPassword(request.body.password,user.password) : false;
  return  status ? response.status(200).json({message:"Sign in success", status: true,token: generateToken(user.email) ,user: {...user,password: undefined}}) : response.status(400).json({error: "Bad request", status: false});
 }
 catch(err){
  console.log(err);
  return response.status(500).json({error:"Server Error", status: false});
 }
}
export const save = (request,response,next)=>{
  
  const errors = validationResult(request);
  if(!errors.isEmpty())
    return response.status(400).json({error: "Bad request",status: false, errors: errors.array()});
  User.create(request.body).then(result=>{
    return response.status(200).json({user: result, status: true});
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: 'Server Error', status: false});
  }); 
}

const generateToken = (userId)=>{
   // userId : unique
   let payload = {subject: userId};

   let token = jwt.sign(payload,'secret-for-access-token',{expiresIn: 50});
   let refreshToken = jwt.sign(payload,'secret-for-refresh-token',{expiresIn: 60});
   
   return {token,refreshToken};
}