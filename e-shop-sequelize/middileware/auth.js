import jwt from 'jsonwebtoken';

export const verifyToken = (request,response,next)=>{
    let token = request.headers.authorization;
    if(!token)
      return response.status(401).json({error: 'Unauthorized request', status: false});
    
    let accessToken = token.split(" ")[0];
    let refreshToken = token.split(" ")[1];  

    jwt.verify(accessToken,'secret-for-access-token',(err)=>{
       if(err){
        if(err.message.includes("expired")){
            jwt.verify(refreshToken,'secret-for-refresh-token',(err)=>{
                if(err)
                  return response.status(401).json({error: 'Unauthorized request', status: false});
                else{
                  // Again generate new token (access, refreshToken)
                  return next();
                }       
            })
        } 
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