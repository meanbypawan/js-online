import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const Test = sequelize.define("test",{
    name: DataTypes.STRING,
    contact: DataTypes.STRING,
    age: DataTypes.INTEGER
},{
    paranoid: true
});

sequelize.sync().
then(result=>{
    console.log("test model created..");
}).catch(err=>{
    console.log(err);
})
export default Test;