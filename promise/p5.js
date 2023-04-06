const f1 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(100);
    })
};

f1().then(result=>{
    console.log("Inside First Then : "+result);
    //result;
}).then(result=>{
    console.log("Inside Second Then : "+result);
});