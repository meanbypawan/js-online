const firstName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("Merry");
            reject("Merry-rejected...");
        },5000);
    });
}
const middleName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("John");
            reject("John rejected....");
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
// ECMA2020
Promise.allSettled([firstName(), middleName(), lastName()])
.then(results=>{
    console.log("Inside Then...");
    console.log(results);
}).catch(cheeku=>{
    console.log(cheeku);
    console.log(cheeku);
});