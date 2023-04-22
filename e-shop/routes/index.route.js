import express from "express";
import { indexAction, signUpPage, signInPage } from "../controller/index.controller.js";

const router = express.Router();

router.get("/",indexAction);
router.get("/signup",signUpPage);
router.get("/signin",signInPage);
export default router;