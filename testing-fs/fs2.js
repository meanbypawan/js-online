import fs from "fs";
console.log("At the start.......");
fs.readFile("./data.txt",(err,data)=>{
    if(!err)
      console.log(data.toString());
    else
     console.log(err);  
});

console.log("At the end.....");