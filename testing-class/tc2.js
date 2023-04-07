/*
  customer:- 
  property:-(id,name,age,balance,ac)
  Behavoiur:- withdrawal, depostie, balanceEnquiry
  
  getAddressOfBank()
*/
class ICICIBank{
  #id;
  #name;
  #age;
  #balance;
  #ac; 
  constructor(id,name,age,balance,ac){
    this.#id = id;
    this.#name = name;
    this.#age = age;
    this.#balance = balance;
    this.#ac = ac;
  }
  showDetails(){
    console.log("Customer Id  "+this.#id);
    console.log("Name : "+this.#name);
    console.log("Age : "+this.#age);
    console.log("Balance : "+this.#balance);
    console.log("Account : "+this.#ac);
  }
  withdrawal(){

  }
  deposite(){

  }
  balanceEnquiry(){

  }
  static getAddressOfBanck(){
    return "palasiya Indore....";
  }
}

let cust1 = new ICICIBank(100,"ABC",21,67000,"ab1001");
 // cust1:- id:100, name:'ABC', age: 21, bal: 67000,ac:"ab1001"
cust1.showDetails();
//console.log(cust1.#name);