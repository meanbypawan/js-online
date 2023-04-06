// We have to process further if given number is even
const evenOdd = (n)=>{
  return new Promise((resolve,reject)=>{
    if(n%2)
      reject("Given number is odd");
    else
      resolve("Given number is even");  
  });
}

evenOdd(20)
.then(result=>{
    console.log("Inisde Then callback : "+result);
})
.catch(rejectResult=>{
    console.log("Inside catch Call back : "+rejectResult);
});

