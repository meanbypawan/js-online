import express from "express";
import { saveOrder } from "../controller/order.controller.js";
const router = express.Router();

router.post("/save",saveOrder);

export default router;