import express from "express";
import { save, signIn } from "../controller/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/save",
body("username","username is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password must have 5 letter at least").isLength({min: 5}),
body("email","Not a valid email id").isEmail(),save);

router.post("/signin",signIn);
export default router;