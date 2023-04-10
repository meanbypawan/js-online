/*
  first.txt :- It is first's file data

  second.txt:- It is second's file data

  combined.txt :- It is first'file data
                  It is second's file data

Ankit:-
  1. First read data from first.txt
  2. Write in combined.txt

  3. Then read data from second.txt
  4. then write(append) in combined.txt

  Jitendra
   1. Read frist.txt
   2. Read second.txt
   3. Write first+second into combined.txt
  --------------------------------------------
  Read Data Asychronously from first and second
  Then write inot combined.txt

*/
import fs from "fs";

const readFromFirst = ()=>{
    return new Promise((resolve,reject)=>{
      fs.readFile("first.txt",(err,data)=>{
        err ? reject(err) : resolve(data);
      })
    });
}
const readFromSecond = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("second.txt",(err,data)=>{
          err ? reject(err) : resolve(data);
        })
      });
}

Promise.all([readFromFirst(), readFromSecond()])
.then(results=>{
   fs.writeFile('./combined.txt',results[0]+"\n"+results[1],(err)=>{
     if(!err)
       console.log("operation success");
     else
       console.log(err);  
   })
 })
.catch(err=>{
    console.log(err);
})