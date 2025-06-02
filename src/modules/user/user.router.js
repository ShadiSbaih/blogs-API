import { Router } from "express";
import "dotenv/config";
import auth from "../../middleware/auth.middleware.js";
import fileUpload from "../../utils/multer.js";
import { deleteUser, getUser, updateUser } from "./user.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
const router = Router();

//get all users
router.get("/", auth(), asyncHandler( getUser));

//delete user
router.delete("/:id", auth(), asyncHandler(deleteUser));

//update user
router.put('/:id', fileUpload().single('image'), asyncHandler(updateUser));
export { router as userRouter };
