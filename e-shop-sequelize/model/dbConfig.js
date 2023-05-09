import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,'',{
   host: process.env.DB_HOST,
   dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log("Database connected successfuly");
}).catch(err=>{
    console.log(err);
})

export default sequelize;
