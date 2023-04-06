const roomCleaning = ()=>{
    console.log("Room cleaning is in progress..."); 
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve("Room is cleaned.....");
         //reject(); 
     },4000);
    });
 }
 const removingGarbage = ()=>{
     console.log("Romving Garbage is in progress....");
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve("Garbage is removed....");
         },3000);
     })
 }

 // As a argument it will take Iterable  (Array of Promise) 
 // If all promise are resolved then all method will also resolved
 // If any one promise is rejected then all method will
 // reject
 Promise.all([roomCleaning(), removingGarbage()])
 .then(result=>{
    console.log("I got a ice-cream....");
 })
 .catch(err=>{
    console.log("Ice-cream is lost...");
 });





