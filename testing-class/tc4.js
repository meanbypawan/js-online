class Car{
    #noOfWheels;
    #engine;
    constructor(noOfWheels){
        this.#noOfWheels = noOfWheels;
        this.#engine = new Engine(1200,"Petrol");
    }
}

// First version of Engine class
// Updated version of Engine class
class Engine{
  #cc;
  #type;
  constructor(cc,type){
    this.#cc = cc;
    this.#type = type;
  }
}

let tata = new Car(4);// tata:- noOfWheels:4. engine: {cc:1200}

