import Cart from "../model/Cart.model.js";
import CartItem from "../model/cartItem.model.js";
import sequelize from "../model/dbConfig.js"
export const addToCart = async (request,response,next)=>{
    
  let transaction = await sequelize.transaction();
  try{ 
   let cart = await Cart.findOne({where: {userId: request.body.userId}});
   if(cart){
     // if cart already exits
     let cartItems = await CartItem.findOne({where: {productId: request.body.productId, cartId: cart.id}});
     if(cartItems)
       return response.status(200).json({message: 'Product already added in cart', status: true});

     let newItem = await CartItem.create({cartId: cart.id, productId: request.body.productId});  
     
     return response.status(200).json({message: 'Item successfully added in cart..'});  
   }
   else{
     let cart = await Cart.create({userId: request.body.userId},{transaction})
     .then(result=>{return result.dataValues});
     
     let cartItems =await CartItem.create({cartId: cart.id, productId:request.body.productId},{transaction})
     .then(result=>{return result.dataValues});
   
     await transaction.commit();
    
     return response.status(200).json({message: 'Item successfully added in cart', status: true});
    }
  }
  catch(err){
    transaction.rollback
    console.log(err);
  }
}