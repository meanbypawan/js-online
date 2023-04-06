const firstName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Merry");
            //reject("Merry-rejected...");
        },5000);
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
Promise.all([firstName(), middleName(), lastName()])
.then(results=>{ // results: - [0-first, 1-middle, 2-last]
    console.log(results);
})
.catch(rejectResult=>{
    console.log(rejectResult);
});