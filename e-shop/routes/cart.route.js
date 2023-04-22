import express from "express";
import { addToCart } from "../controller/cart.controller.js";
import { auth } from "../middleware/Auth.js";
const router  = express.Router();

router.get("/add-to-cart/:productId",auth,addToCart);
export default router;