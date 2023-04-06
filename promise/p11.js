/*
  To handle multiple asynchronous operation easily
  Overcome callback hell problem
*/
const first = (val)=>{
    console.log("Iniside First : "+val);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(val+2);
        },5000);
    });
}
const second = (val)=>{
    console.log("Inisde Second : "+val);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve(val+2);
            reject("Second wala promise rejected...");
        },1000);
    });
}

const third = (val)=>{
    console.log("Inside Third : "+val);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve(val+2);
            reject("Third wala promise rejected.....");
        },1000);
    });
}
const fourth = (val)=>{
    console.log("Inside Fourth  :"+val);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(val);
        },1000);
    });
}
// Promise chaining
// p: {undefined} : state :- pending--fullfilled
first(10)
.then(result=> {return second(result);})
.then(result=>{return third(result);})
.then(result=>fourth(result))
.catch(rejectionValue=>{console.log(rejectionValue)});
/*
first(10,function(val){
    second(val,function(val){
        third(val,function(val){
            fourth(val);
        });
    });
});
*/