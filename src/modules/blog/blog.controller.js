import BlogModel from "../../../DB/model/blog.model.js";
import { UserModel } from "../../../DB/model/user.model.js";
import AppError from "../../../utils/appError.js";

export const getBlogs = async (req, res) => {
  const blogs = await BlogModel.findAll({
    attributes: ["id", "title"],
    include: {
      model: UserModel,
      attributes: ["id", "userName"],
    },
  });
  res.status(200).json({ message: "success", blogs });
};

export const createBlog = async (req, res) => {
  const { title, description } = req.body;
  const blog = await BlogModel.create({ title, description, UserId: req.id });
  res.status(201).json({
    message: "Blog created successfully",
    blog,
    the_maker: `made by user ${req.id}`,
  });
};
export const getDetails = async (req, res,next) => {
  const { id } = req.params;
  const blog = await BlogModel.findByPk(id);
  if (!blog) {
    return next( new AppError("Blog not found",404));
  }

  res.status(200).json({ message: "success", blog });
};
