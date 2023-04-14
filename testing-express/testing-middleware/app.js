// How to use express framework
import express from "express";

const app = express(); // app is your express application instance

// app.js ---> It find suitable middlware from top-bottom
// 

// http://localhost:3000/contact
app.use((request,response,next)=>{
    console.log("app.use() execute First..."); 
    next();
});
// next() :- In stack it will find middleware for /about route
app.get("/home",(request,response)=>{
    response.write("HOME Page");
    response.end(); // ending request response life cycle...
});
app.get("/contact",(request,response)=>{
    response.end("Contact Page")
});

app.get("/product/:productId",(request,response)=>{
    console.log(request.params.productId);
    response.end("/product/:id catched.....");
})
 
app.listen(3000,()=>{
    console.log("Server is started...");
})