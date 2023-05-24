import express from 'express';
import mongoose from 'mongoose';
import CategoryRouter from './routes/category.route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import BrandRouter from './routes/brand.route.js';
import ProductRouter from './routes/product.route.js';
import path from 'path';
import {fileURLToPath} from 'url';
const app = express();
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://meanstack:mean123@cluster0.dkefj.mongodb.net/reactdb?retryWrites=true&w=majority', err => {
    if (!err) {
        let port = process.env.PORT || 3000
        app.use(cors());
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        app.use(express.static(path.join(__dirname,'public')));
        app.use(express.static('images'));

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use("/category",CategoryRouter);
        app.use("/brand",BrandRouter);
        app.use("/product",ProductRouter);        
        app.listen(port, () => {
            console.log("Server Running..");
        })
    }
    else
        console.log("Database connection error.."+err);
});
