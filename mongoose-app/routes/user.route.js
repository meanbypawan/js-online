import express from "express";
import { addField, save } from "../controller/user.controller.js";
const router  = express.Router();

router.post("/save",save);
router.post("/add-field",addField);
export default router;