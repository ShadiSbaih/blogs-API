import { UserModel } from "../../../DB/model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../utils/AppError.js";

export const register = async (req, res,next) => {
  const { userName, email, password } = req.body;
  /* const result = registerSchema.validateAsync({ userName, email, password },{abortEarly:false});
    if (result.error) {
    return res.status(400).json({ message: result.error.message });
 }*/
  const salt = bcrypt.genSaltSync(parseInt(process.env.SALT));
  const hashPassword = bcrypt.hashSync(password, salt);
  const user = await UserModel.create({
    userName,
    email,
    password: hashPassword,
  });
  res.status(201).json({ message: "User created successfully", user });
};
export const login = async (req, res,next) => {
  const { email, password } = req.body;

  /*const result = registerSchema.validateAsync({ email, email },{abortEarly:false});
   if (result.error) {
    return res.status(400).json({ message: result.error.message });
   }
    */

  const user = await UserModel.findOne({ where: { email } });

  if (!user) {
    //return res.status(404).json({ message: "User not found" });
    return next( new AppError("Invalid Email",404)); ;
  }
  const check = await bcrypt.compare(password, user.password);
  if (!check) {
    return next( new AppError("Invalid Password",400)); ;

    // return next( new Error("Invalid Password"));
  }
  const token = jwt.sign(
    { id: user.id, name: user.userName, role: user.role },
    "secretKey"
  );
  res.status(200).json({ message: "Login successful", user, token });
};
