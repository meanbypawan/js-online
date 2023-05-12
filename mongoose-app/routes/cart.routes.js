import express from "express";

import { addToCart, getCart, removeFormCart } from "../controller/cart.controller.js";

import multer from "multer";

const upload = multer({dest: 'public'});

const router  = express.Router();

router.get("/:id",getCart);
router.post("/add-to-cart",addToCart);
router.post("/remove",removeFormCart);

router.post("/save-profile",upload.single('profile'),(request,response,next)=>{
    console.log("middleware called....");
    console.log(request.file);
    console.log(request.body.userId);
});

export default router;