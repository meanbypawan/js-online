import express from "express";
import { saveInBulk,fetchCategory } from "../controller/category.controller.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/all",fetchCategory);
export default router;