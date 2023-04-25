import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";
import bcrypt from "bcryptjs";
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
        allowNull: false,
        set(value){
           let saltKey = bcrypt.genSaltSync(10);
           let encryptedPassword = bcrypt.hashSync(value,saltKey);
           this.setDataValue("password",encryptedPassword);
        }
    },
    gender:{
        type: DataTypes.STRING,
        validate:{
            isIn:[["Male","Female"]]
        }
    }
});

User.checkPassword = (originalPassword,hashPassword)=>{
  console.log("Check Password Called..");  
  return bcrypt.compareSync(originalPassword,hashPassword);
}
sequelize.sync()
.then(()=>{
    console.log("users table created...");
})
.catch(err=>{
    console.log(err+" in users model...");
});
export default User;