import  { Signup, Login, profile } from "../Controllers/AuthControllers.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";
import express from "express"

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);

router.post('/',userVerification)

export default router