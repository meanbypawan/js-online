import express from "express";
import { indexAction } from "../controller/index.controller.js";

const router = express.Router();

router.get("/",indexAction);

export default router;