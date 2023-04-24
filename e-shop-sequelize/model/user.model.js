import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const User = sequelize.define("user",{
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
           this.setDataValue("username",value.trim());   
        },
        get(){
            return "Mr."+ this.getDataValue("username");
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }

    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.STRING,
        validate:{
            isIn:[["Male","Female"]]
        }
    }
});
// sync()
// sync({force: true})
// sync({alter: true})
sequelize.sync()
.then(()=>{
    console.log("users table created...");
})
.catch(err=>{
    console.log(err+" in users model...");
});
export default User;