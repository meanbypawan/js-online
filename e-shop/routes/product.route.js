import express from "express";
import { productPage } from "../controller/product.controller.js";
const router = express.Router();


router.get("/list",productPage);

export default router;
