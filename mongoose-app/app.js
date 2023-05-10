import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.route.js";
import CartRouter from "./routes/cart.routes.js"
/*
   upload.single()
   upload.array()
*/
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/eshop")
.then(result=>{
  app.use("/user",UserRouter);  
  app.use("/cart",CartRouter);
  

  app.listen(3000,()=>{
    console.log("Server started.....");
  });
}).catch(err=>{
    console.log(err);
})


