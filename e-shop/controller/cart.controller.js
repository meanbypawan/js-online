export const addToCart = (request,response,next)=>{
    return response.json({message: "Item Added in cart : "+request.params.productId});
};