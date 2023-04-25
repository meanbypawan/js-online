import User from "../model/user.model.js"
import { validationResult } from "express-validator";

export const signIn = async (request,response,next)=>{
 try{ 
  let user = await User.findOne({raw: true,where:{email: request.body.email}});
  let status = user ? User.checkPassword(request.body.password,user.password) : false;
  return  status ? response.status(200).json({message:"Sign in success", status: true, user: {...user,password: undefined}}) : response.status(400).json({error: "Bad request", status: false});
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