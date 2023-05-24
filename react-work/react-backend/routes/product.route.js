import express from 'express';
import { save, list } from '../controller/product.controller.js';
import multer from 'multer';
const upload = multer({dest: 'public/images'});
const router = express.Router();
router.post("/save",upload.single('productImage'),save);
router.get("/list",list);
export default router;