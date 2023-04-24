import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sequelizedb','root','',{
   host: 'localhost',
   dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log("Database connected successfuly");
}).catch(err=>{
    console.log(err);
})

export default sequelize;
