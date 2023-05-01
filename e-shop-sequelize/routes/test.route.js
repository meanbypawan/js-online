import express from "express";
import { allUserInfo, fetchTest, removeRecord, save } from "../controller/test.controller.js";
const router = express.Router();
router.post("/save",save);
router.post("/remove",removeRecord);
router.get("/fetch",fetchTest);
router.post("/allinfo",allUserInfo);
export default router;