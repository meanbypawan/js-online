import http from "http";

// home.html
http.createServer((request,response)=>{
    if(request.url == "/" || request.url == "/home"){
        response.end("<h1>Home Page</h1>");
    }
    else if(request.url == "/about"){
        response.end("<h1>About Page</h1>");
    }
    else if(request.url == "/contact"){
        response.end("<h1>Contact Page</h1>");
    }
})
.listen(3000,()=>{
    console.log("server started..");
})
// Express