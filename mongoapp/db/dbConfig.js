import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/eshop")
.then(result=>{
    console.log("Database connected...");
}).catch(err=>{
    console.log("Connection Failed....");
})

export default mongoose.connection; // db
// connection pool (defaultSize : 5)