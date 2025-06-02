import { Router } from "express";
import "dotenv/config";
import { registerSchema, loginSchema } from "./auth.validation.js";
import validation from "../../middleware/validation.middleware.js";
import { login, register } from "./auth.controller.js";
import { asyncHandler } from "../../utils/catchError.js";

const router = Router();

// register user
router.post("/register", validation(registerSchema), asyncHandler(register));
//login user
router.post("/login", validation(loginSchema), asyncHandler(login));

export { router as userRouterAuth };
