class Car{
    #noOfWheels;
    #engine;
    constructor(noOfWheels,engine){
        this.#noOfWheels = noOfWheels;
        this.#engine = engine;
    }
}

// First version of Engine class
class Engine{
  #cc;
  #type;
  constructor(cc,type){
    this.#cc = cc;
    this.#type = type;
  }
}

let engine = new Engine(1200,"Petrol");
let car = new Car(4,engine);
