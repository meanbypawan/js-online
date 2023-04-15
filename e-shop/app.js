import express from "express";
import {fileURLToPath} from "url";
import path from "path";

const app = express();

app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath));

app.get("/",(request,response)=>{
    response.render("index.ejs");
});

app.listen(3000,()=>{
    console.log("server started...");
})