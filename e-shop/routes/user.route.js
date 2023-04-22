import express from "express";
import { signin, signup } from "../controller/user.controller.js";
import { auth } from "../middleware/Auth.js";
const router = express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.get("/cart",auth,(request,response)=>{
    return response.end("/cart route is executed...");
})
export default router;