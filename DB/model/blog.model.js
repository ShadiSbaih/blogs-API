import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { UserModel } from "./user.model.js";

 const BlogModel = sequelize.define(
    "Blog",
    {
        // لحاله رح يعمل id
        // id: {
        // type: DataTypes.INTEGER,
        // autoIncrement: true,
        // primaryKey: true,
        // },
        title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        },
        description: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
    },
    {
        tableName: "blogs",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }
    );
    UserModel.hasMany(BlogModel);
    BlogModel.belongsTo(UserModel);
    export default BlogModel;