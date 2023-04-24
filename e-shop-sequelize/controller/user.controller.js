import User from "../model/user.model.js"

export const save = (request,response,next)=>{
  console.log(request.body);  
  User.create({
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
    gender: request.body.gender
  }).then(result=>{
    return response.status(200).json({user: result, status: true});
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: 'Server Error', status: false});
  })  
}