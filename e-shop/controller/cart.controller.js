export const addToCart = (request,response,next)=>{
    console.log("add to cart called......");
    console.log(request.url);
    return response.json({message: "Item Added in cart : "+request.params.productId});
};