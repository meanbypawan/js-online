/*
  Callback Hell :- Complicated code using nested callback

  Promise:- (Pending, fullfilled, reject ---> settled(2020))
    resolve()
    reject()

    all() :-- It will resolve if all promises are resolved and reject if any one promise is rejected
    allSettled() :- It will resolve when all promises are settled
     doesn't matter promise is resolving or rejecting and it reject if Iterrable is empty or all promise are rejected
    
    race() :- Race will resolve if very first executed promise
    is resolve and reject if very first executed promise is rejected

    any() :- Any will return resolve result of very first 
    promise which is resolved first.
*/
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P1 is rejected...");
    },1000);
}); 
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 is resolved...");
        //reject("P2 is rejected...");
    },3000);
}); 

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P3 is resolved...");
        //reject("P3 is rejected...");
    },2000);
}); 
Promise.any([p1,p2,p3])
.then(result=>console.log(result))
.catch(rejectionResult=>{
    console.log("Inside catch"); // rejectionResult :- AggregateError
    console.log(rejectionResult)
});