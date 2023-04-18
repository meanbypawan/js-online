import express from "express";
import { addToCart } from "../controller/cart.controller.js";
const router  = express.Router();

router.get("/add-to-cart/:productId",addToCart);
export default router;