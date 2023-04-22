export const auth = (request,response,next)=>{
    if(request.session.currentUser)
      next();
    else if(request.xhr)
           return response.status(401).json({message: 'Signin First'});
          else
           return response.render('signin.ejs');  
}