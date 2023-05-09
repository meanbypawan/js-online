import express from "express";
import dotenv from "dotenv";
import UserRouter from './routes/user.route.js';
import bodyParser from 'body-parser';
import CategoryRouter from './routes/category.route.js';
import ProductRouter from './routes/product.route.js';
import CartRouter from './routes/cart.route.js';
import TestRouter from './routes/test.route.js';
import OrderRouter from './routes/order.route.js';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
app.use("/cart",CartRouter);
app.use("/test",TestRouter);
app.use("/order",OrderRouter);

app.listen(process.env.SERVER_PORT,()=>{
    console.log("Server Started...");
})
export default app;