import fs from "fs";
try{
  let data = "Node.Js allows us to run javascript on server";
  fs.writeFileSync("./abc.txt",data);
  console.log("operation success");
}
catch(err){
    console.log(err);
}  