import { UserModel } from "../../../DB/model/user.model.js";
import "dotenv/config";
import { sendEmail } from "../../utils/sendEmail.js";
import cloudinary from "../../utils/cloudinary.js";

export const getUser=async (req, res) => {

    const users = await UserModel.findAll({
      attributes: ["id", "userName", "email"], 
    });
    sendEmail();
    let message = users.length > 0 ? `success ${users.length} found !` : "No users found";
    res.status(200).json({ message, users });
  
}

export const deleteUser=async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await UserModel.destroy({ where: { id } });
    res
      .status(200)
      .json({ message: `User ${user.userName} deleted successfully` });
  
}
export const updateUser=async (req, res) => {
 
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const { secure_url } = await cloudinary.uploader.upload(req.file.path);
    user.profileImage = secure_url;
    await user.save();
    return res.status(200).json({ message: 'Success', profileImage: secure_url });
 
}