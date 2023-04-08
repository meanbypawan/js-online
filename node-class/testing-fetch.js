import fetch from "node-fetch";

fetch("https://dummyjson.com/products")
.then(result=>console.log(result))
.catch(err=>console.log(err));