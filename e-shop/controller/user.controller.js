import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signin = async (request,response,next)=>{
   // request.body = {email: 'test@gmail.com', password: '12345'}
   let user = new User();
   user.email = request.body.email;
   user.password = request.body.password;

   user.signin()
   .then(result=>{
    console.log(result);
   }).catch(err=>{
    console.log(err);
   })
}
export const signup = async (request,response,next)=>{
    let user = new User();
    user.username =  request.body.username;
    user.email = request.body.email,
    user.password = request.body.password;
    user.contact = request.body.contact;
   
    let saltKey = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(user.password,saltKey);

    
    user.password = encryptedPassword;
    user.save().
    then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}