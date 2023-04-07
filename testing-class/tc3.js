/*
  Addition 
    properties:- a, b (Private)

    Behaviour :- add()
*/

class Addition{
    #a;
    #b;
    add(){
        console.log("Addition  :"+(this.#a+this.#b));
    }
}

let obj = new Addition();
//obj.display();
obj.add();