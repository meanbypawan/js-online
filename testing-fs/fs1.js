// fs:-  File System
/**
   Read & Write operation for the file

   1. Symchronous/ Blocking Code
      readFileSync()
      writeFileSync()

   2. Asynchronous/ Non-blocking Code
      readFile() 
      writeFile()

   Asynchronous Programming (callback,Promise)   
   error callback
   (err,result)=>{}
*/
import fs from "fs";

fs.writeFile("./data.txt","Node.Js is javascript Runtime Envionment",(err)=>{
    if(err)
      console.log(err);
    else
      console.log("Operation success");  
});












