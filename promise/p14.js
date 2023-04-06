/*
  To handle multiple asynchronous operation easily
  Overcome callback hell problem
*/
const first = (val)=>{
    console.log("Iniside First : "+val);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(val+2);
        },1000);
    });
}
const second = (val)=>{
    console.log("Inisde Second : "+val);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(val+2);
            //reject("Second wala promise rejected...");
        },1000);
    });
}

const third = (val)=>{
    console.log("Inside Third : "+val);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve(val+2);
            reject("Third wala rejected..");
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

async function executeTask(){
  try{  
    var firstResult = await first(10);
    var secondResult = await second(firstResult);
    var thirdResult = await third(secondResult);
    await fourth(thirdResult);
  }
  catch(err){
    console.log("Inside Catch...");
    console.log(err);
  } 
}
executeTask();
/*
// Promise Hell
first(10)
.then(result=>{
    second(result).
    then(result=>{
        third(result)
          .then(result=>fourth(result));
    })
})
*/

/*
first(10,function(val){
    second(val,function(val){
        third(val,function(val){
            fourth(val);
        });
    });
});
*/