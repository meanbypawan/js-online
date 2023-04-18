import express from "express";
import {fileURLToPath} from "url";
import path from "path";
import IndexRouter from "./routes/index.route.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from './routes/cart.route.js';

const app = express();

app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath));

// http://localhost:3000/product/...
app.use("/product",ProductRouter);

app.use("/cart",CartRouter);
// http://localhost:3000/
app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("server started...");
})