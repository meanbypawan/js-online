import express from "express";
import {fileURLToPath} from "url";
import path from "path";
import IndexRouter from "./routes/index.route.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from './routes/cart.route.js';
import UserRouter from './routes/user.route.js';
import bodyParser from 'body-parser';
import session from "express-session";

const app = express();

app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(session({
    secret: 'fsdfdrewrewvcvvberw',
    resave: false,
    name: 'eshop',
}));

// http://localhost:3000/product/...

app.use("/product",ProductRouter);

app.use("/cart",CartRouter);
app.use("/user",UserRouter);

// http://localhost:3000/
app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("server started...");
})