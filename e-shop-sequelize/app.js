import express from "express";
import UserRouter from './routes/user.route.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/user",UserRouter);

app.listen(3000,()=>{
    console.log("Server Started...");
})