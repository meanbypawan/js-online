import fs from "fs";

const readStream = fs.createReadStream("./data.txt");

// Read Stream Internally use event.

// If data is avaibale to read then
// it will emit data event
let fileData = "";

readStream.on("data",(chunck)=>{
  fileData = fileData + chunck;
});

readStream.on("end",()=>{
   console.log(fileData);
});

readStream.on("error",()=>{
    console.log("Error event catched...");
})