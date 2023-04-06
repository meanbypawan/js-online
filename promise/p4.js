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
roomCleaning().then(result=>{
    return 100;
}).then(result=>{
    console.log(100);
});
roomCleaning().then(result=>{
    console.log(result); // result:- Room is cleaned
    return removingGarbage();
}).then(result=>{
    console.log(result);
    console.log("Got a ice-cream...");
}).catch(err=>{
    console.log('Ice-cream is lost...');
});
/*
roomCleaning()
.then(result=>{
    console.log(result);
    removingGarbage()
    .then(result=>{
        console.log(result);
        console.log("I got ice-cream..");
    }).catch(err=>{
        console.log("Ice-cream is lost");
    })
}).catch(err=>{
    console.log("Ice-cream is lost...");
})
*/
// async and await
// won the ice-cream in case if both task completed successfully
// Otherwise ice-cream will be lost