/*
   data.txt ---> copy data into ---> result.txt;
  
   a. readFileSync()
      writeFileSync()

   b. readFile()
      wrieFile() 
      
   Server :-
     request ,  response
     
     ReadStream, WriteStream
*/

import fs from "fs";
const readStream = fs.createReadStream("./data.txt");
const writeStream = fs.createWriteStream("./result.txt");

readStream.pipe(writeStream);

readStream.on("end",()=>{
    console.log("Data copied....");
})