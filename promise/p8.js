const firstName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Merry");
            //reject("Merry-rejected...");
        },4000);
    });
}
const middleName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("John");
            //reject("John rejected....");
        },3000);
    });
}
const lastName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Alexan");
            //reject("Alexan rejected.....");
        },2000);
    });
}
// settled :-- resolved
//         :- rejected

Promise.race([firstName(), middleName(), lastName()])
.then(result=>{
    console.log("Inside Then...");
    console.log(result);
})
.catch(rejectedResult=>{
    console.log("Inside Catch...");
    console.log(rejectedResult);
});