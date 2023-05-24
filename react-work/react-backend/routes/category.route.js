import express from 'express';
import { append } from 'vary';
import { categoryList, saveCategory, deleteCategory } from '../controller/category.controller.js';
const router = express.Router();

router.get("/list",categoryList);
router.post("/save",saveCategory);
router.get("/delete",deleteCategory);
export default router;