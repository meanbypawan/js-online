import jwt from "jsonwebtoken";
export const verifyToken = (request,response,next)=>{
  let token = request.headers.authorization;
  console.log(request.session.currentUserId);
  try{
    if(!token)
     throw new Error();
    token = token.split(" ")[1]; 
    jwt.verify(token,"fdfxvcvnreorevvvcrerer",(err,decode)=>{
      console.log("Subject:----------"+decode.subject);
    });
  }
  catch(err){
    if(err.message.includes("expired"))
      return response.status(401).json({error: "Token has expired...", status: false});
    return response.status(401).json({error: "Unauthorized request", status: false});
  }
}