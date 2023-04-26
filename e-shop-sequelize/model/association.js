import Cart from "./Cart.model.js";
import CartItem from "./cartItem.model.js";
import Category from "./category.model.js";
import Order from "./order.model.js";
import OrderItem from "./orderItem.model.js";
import Product from "./product.model.js";
import User from "./user.model.js";

Category.hasMany(Product,{
    foreignKey: 'categoryname'
});
Product.belongsTo(Category,{
    foreignKey: 'categoryname', targetKey: 'categoryName'
});

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product,{through: CartItem});
Product.belongsToMany(Cart,{through: CartItem});

User.hasMany(Order);
Order.belongsTo(User);  

Order.belongsToMany(Product,{through: OrderItem});
Product.belongsToMany(Order,{through: OrderItem});

export {Category, Product, Cart, CartItem, Order,OrderItem};