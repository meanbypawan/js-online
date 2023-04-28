import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";
const Category = sequelize.define("category",{
    categoryName:{
        type: DataTypes.STRING,
        primaryKey: true
    }
});

export default Category;