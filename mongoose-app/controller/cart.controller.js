import { Cart } from "../model/cart.model.js"
import { Product } from "../model/product.model.js";
export const removeFormCart = async (request,response,next)=>{
    let userId = request.body.userId;
    let productId = request.body.productId;
    Cart.updateOne(
        {userId: userId},
        {$pull:{cartItems: {productId: productId}}}
        ).then(result=>{
            return response.status(200).json({result});
        }).catch(err=>{
            console.log(err);
            return response.status(500).json({err});
        })
}
export const addToCart = async(request,response,next)=>{
    let userId = request.body.userId;
    let productId = request.body.productId;
    try{
    let cart = await Cart.findOne({userId: userId});
    if(cart){ 
       let status = cart.cartItems.some((item)=>item.productId == productId);
       if(status)
         return response.status(200).json({message: 'Product is already added in cart'});
       else{
         cart.cartItems.push({productId: productId});
         await cart.save();
         return response.status(200).json({message: 'Product added successfully..'});
       }
        
    }
    else{
      let cart = await Cart.create({
        userId: userId,
        cartItems: [{productId: productId}]
      });
      return response.status(200).json({message: "Item successfully added in cart.."});
    }
   }
   catch(err){
     return response.status(500).json({error: "server error"});
   }
}
export const getCart = (request,response,next)=>{
   Cart.findOne({userId: request.params.id})
   .populate('userId')
   .populate({path: 'cartItems.productId',select:{title: 1, price: 1}}).then(result=>{
    return response.status(200).json({result: result,status: true});
   }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: 'Server Error', status: false});
   })
}