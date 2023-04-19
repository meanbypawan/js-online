import express from "express";
import { indexAction, signUpPage } from "../controller/index.controller.js";

const router = express.Router();

router.get("/",indexAction);
router.get("/signup",signUpPage);
export default router;