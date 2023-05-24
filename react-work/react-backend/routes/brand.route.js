import express from 'express';
import { deleteBrand, allBrands, brandByCategory, save, updateBrand } from '../controller/brand.controller.js';

const router  = express.Router();
router.post("/save",save);
router.get("/all-brand",allBrands);
router.get("/brandbycategory",brandByCategory);
router.get("/delete",deleteBrand);
router.post("/update",updateBrand);
export default router;