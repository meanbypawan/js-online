/*
   Inheritance In JS :-
   By using existing thing to develop something new
   But there should be any changes in existing.
*/
class J5{
    #data;
   constructor(){
    this.#data = 100;
    console.log("Parent class constructro called....");
   } 
   recevingCall(){
     console.log("Call Received....");
   }
   rejectingCall(){
     console.log("Call Rejected....");
   }
   getData(){
    return this.#data;
   }
}

class J7 extends J5{
  constructor(){
    super();
    console.log("J7 constructor......");
  }  
  camera(){
    console.log("Photo clicked...");
    this.#wish();
  }

  #wish(){
    console.log("Good Morning......");
   }
}

let j7 = new J7();
j7.recevingCall();
j7.rejectingCall();
j7.camera();
console.log(j7.getData());
