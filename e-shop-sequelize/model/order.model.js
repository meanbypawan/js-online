import { DataTypes } from "sequelize";
import sequelize from "./dbConfig.js";

const Order = sequelize.define("order",{
    contactPerson: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    totalBillAmount: DataTypes.INTEGER,
    deliverAddress: DataTypes.STRING
});

export default Order;