import express from "express";
import UserRouter from './routes/user.route.js';
import bodyParser from 'body-parser';
import CategoryRouter from './routes/category.route.js';
import ProductRouter from './routes/product.route.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);

app.listen(3000,()=>{
    console.log("Server Started...");
})