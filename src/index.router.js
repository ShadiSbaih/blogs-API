import { connectDB } from "../DB/connection.js";
import { userRouter } from "./modules/user/user.router.js";
import { userRouterAuth } from "./modules/authentication/auth.router.js";
import blogRouter from "./modules/blog/blog.router.js";

const initApp = (app, express) => {
  connectDB();
  app.use(express.json());
  app.use("/users", userRouter);
  app.use("/auth", userRouterAuth);
  app.use("/blog", blogRouter);
  app.use((err, req, res, next) => {
    res.status(err.statusCode).json({ message: err.message });
  });
};

export default initApp;

localhost:3000/users
localhost:3000/auth
localhost:3000/blog
