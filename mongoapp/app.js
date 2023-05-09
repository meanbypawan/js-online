import express from "express";
import db from "./db/dbConfig.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.get("/categories",(request,response,next)=>{
   db.collection("categories").find().toArray()
   .then(result=>{
    return response.status(200).json({result});
   }).catch(err=>{
    return response.status(500).json({error: 'Server Error'});
   });
});

app.post("/save",(request,response,next)=>{
    db.collection("categories").insertOne(request.body)
    .then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
})

app.listen(3000,()=>{
    console.log("Server started...");
})