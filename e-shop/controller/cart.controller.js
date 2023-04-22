import Cart from "../model/cart.model.js";
import CartItems from "../model/cartItems.model.js";

const saveInCart = async (productId, userId) => {
    let cartItem = new CartItems();
    cartItem.productId = productId;
    let cartStatus = await cartItem.save(userId);
    return cartStatus;
}
export const addToCart = async (request, response, next) => {
    try {
        let cart = new Cart();
        cart.userId = request.session.currentUserId;
        let { status, cartId } = await cart.isExist();// {cartId: 17, satus: true,....}
        if (!status) {
            const status = await cart.createCart();
            if (status) {
                let cartStatus = await saveInCart(request.params.productId, cart.userId);
                if (cartStatus) {
                    return response.status(200).json({ message: "Item successfully added in cart" });
                }
            }
        }
        else {
            let productId = request.params.productId;
            let productStatus = await CartItems.isProductExist(productId, cartId);
            if (productStatus)
                return response.status(200).json({ message: 'Product is already added in cart..' });
            else {
                let cartStatus = await saveInCart(productId, cart.userId);
                if (cartStatus) {
                    return response.status(200).json({ message: "Item successfully added in cart" });
                }
            }
        }
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: 'Sever Error' });
    }
    /*
    1. If user is coming first time
       a. create cart first
       b. the save product in cartItems
    2  else (user is coming second time)
       a.if product is exist or not
          if yes then send message produc already exits
         else
          save product into cartItems    
  */
};