import http from "http";
import fs from "fs";
import path from "path";
//const http = require("http");
//const fs = require("fs");
import url,{fileURLToPath} from "url";
http.createServer((request,response)=>{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    let parsedUrl = url.parse(request.url,true);
    console.log(parsedUrl);

    if(parsedUrl.pathname == "/home"){
      let indexFilePath = path.join(__dirname,"views/index.html");
      let indexPage =  fs.readFileSync(indexFilePath);
      response.write(indexPage);
      response.end();
    }
    else if(parsedUrl.pathname == "/about"){
        let aboutFilePath = path.join(__dirname,"views/about.html");
        let aboutPage = fs.readFileSync(aboutFilePath);
        response.write(aboutPage);
        response.end();
    }
    else if(parsedUrl.pathname == "/contact"){
        let contactFilePath = path.join(__dirname,"views/contact.html");
        let contactPage = fs.readFileSync(contactFilePath);
        response.write(contactPage);
        response.end();
    }
    else if(parsedUrl.pathname.match("\.jpeg") || parsedUrl.pathname.match("\.png")){
       // /logo.jpeg 
       let imagePath =  path.join(__dirname,"views/"+parsedUrl.pathname); 
       const readStream = fs.createReadStream(imagePath);
       readStream.pipe(response);
    }
    else if(parsedUrl.pathname.match("\.css")){
        let cssPath = path.join(__dirname,"views/"+parsedUrl.pathname);
        const readStream = fs.createReadStream(cssPath);
        readStream.pipe(response);
    }
    // "/add?a=20&b=10" == "/add"
    else if(parsedUrl.pathname == "/add"){
        let a = parsedUrl.query.a;
        let b = parsedUrl.query.b;
        response.end("/add route catched...Addition : "+(a*1+b*1));
    }
}).listen(3000,()=>{
    console.log("Server Started....");
})