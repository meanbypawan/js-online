import express from "express";
import { saveInBulk,fetchCategory, getCategory } from "../controller/category.controller.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/all",fetchCategory);
router.get("/fetch-category",getCategory);
export default router;