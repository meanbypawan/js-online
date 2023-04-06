/*
  resolve()
  reject()
  all()
  allSettled()
  race()
  any()

  state:-  Pending , Fullfilled/Resolved, Rejected, settled
*/ 

let p = new Promise((resolve,reject)=>{
    resolve("Promise is resolved....");
    //reject();
});

// p: {undefined} state :- Pending
// p: {someData} state:- rejected
p.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log("Promise is rejected.....");
});


