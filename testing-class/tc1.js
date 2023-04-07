
/*
  
  Two Type of Member
    1. Instance Member
         Data member (Properties of the object)
         Mehtod (Behaviour of the object) 
    2. Static Member
         Data member (Class vairable/class properties)
         method (Behaviour/Functionality of class)
    
    3. Constructor     
    m1,m2 are the instance member of class Message
    
    function Message(){
      this.m1 = function(){

      }
      this.m2 = function(){


      }
    }
    */
class Message{
    m1(){
      console.log("GM....");
    }
    m2(){
     console.log("Gn....");
    }
    static wish(){
      console.log("Hello Friends....");
    }
}

let obj = new Message();
obj.m1();
obj.m2();
Message.wish();