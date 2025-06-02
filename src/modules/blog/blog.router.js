import { Router } from "express";
import auth from "../../middleware/auth.middleware.js";
import { createBlog, getBlogs, getDetails } from "./blog.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
import validation from "../../middleware/validation.middleware.js";
import { blogDetailsSchema, createBlogSchema } from "./blog.validation.js";

const router = Router();

router.get("/", asyncHandler(getBlogs));
router.get("/:id",validation(blogDetailsSchema), asyncHandler(getDetails));
router.post("/", auth(),validation(createBlogSchema), asyncHandler(createBlog));


export default router;