import jwt from 'jsonwebtoken';
import { generateToken } from '../controller/user.controller.js';
export const verifyToken = (request,response,next)=>{
    let token = request.headers.authorization;
    if(!token)
      return response.status(401).json({error: 'Unauthorized request', status: false});
    
    let accessToken = token.split(" ")[0];
    let refreshToken = token.split(" ")[1];  

    jwt.verify(accessToken,'secret-for-access-token',(err)=>{
       if(err){
        console.log("Access token is expired.....");
        if(err.message.includes("expired")){
            jwt.verify(refreshToken,'secret-for-refresh-token',(err,decode)=>{
                if(err){
                  console.log("Refresh Token is also expired....");
                  return response.status(401).json({error: 'Unauthorized request', status: false});
                }
                else{
                  // Re-generate Access token and Refresh Token
                  console.log("Payload Subject: "+decode.subject);
                  const {token,refreshToken} =  generateToken(decode.subject);
                  response.set("Authorization",token+" "+refreshToken);
                  return next();
                }       
            })
        }
        else
         return response.status(401).json({error: 'Unauthorized request', status: false});
       }
       else 
        return next();
    });
 }
/*
export const verifyToken = (request,response,next)=>{
   // Get a token from the request
   let token = request.headers.authorization;
   if(!token)
     return response.status(401).json({error: 'Unauthorized request', status: false});
   
   jwt.verify(token,'dfsdfdkjerieoerererer',(err)=>{
      if(err){
        return response.status(401).json({error: 'Unauthorized request', status: false});
      }
      next();
   })
}
*/