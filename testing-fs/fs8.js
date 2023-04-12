import fs from "fs";

const writeStream = fs.createWriteStream("./abc.txt");

let data = "Node.Js is written in c++";

writeStream.write(data);
writeStream.end();

/*
  finish :-   operation success
  error :- if write operation failed
*/
writeStream.on("finish",()=>{
    console.log("Operation success...");
});

writeStream.on("error",()=>{
    console.log("Error.....");
});