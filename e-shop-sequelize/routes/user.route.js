import express from "express";
import { save } from "../controller/user.controller.js";
const router = express.Router();

router.post("/save",save);
export default router;