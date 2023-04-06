async function f1(){
  return 100;
}

//console.log(f1);
//console.log(f1()); // Promise {100}
f1()
.then(result=>console.log(result));