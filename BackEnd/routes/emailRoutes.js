import express from "express";
import { sendEmail, verifyEmail } from "../controllers/emailController.js";

const router = express.Router();

// Route: Send verification email
router.post("/send", sendEmail);

// Route: Verify email & capture location
router.get("/verify", verifyEmail);

export default router;
