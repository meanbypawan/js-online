export const auth = (request,response,next)=>{
    console.log(request.url);
    
    if(request.session.currentUser)
      next();
    else if(request.url+''.includes('/add-to-cart'))
           return response.json({message: 'Signin First'});
          else
           return response.render('signin.ejs');  
}