/*
  Two way of exporting from module
  1. default export
     export default obj;

  2. named export
     export obj;
*/

var username = "rh@gmail.com";
var address = "scheme 51, indore";
var age = 31;
var mobile = "9009111222"

export default username;
export {address,age,mobile};