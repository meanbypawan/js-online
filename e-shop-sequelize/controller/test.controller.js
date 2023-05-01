import Cart from "../model/Cart.model.js";
import CartItem from "../model/cartItem.model.js";
import Order from "../model/order.model.js";
import OrderItem from "../model/orderItem.model.js";
import Product from "../model/product.model.js";
import Test from "../model/test.model.js"
import User from "../model/user.model.js";

export const save = (request,response,next)=>{
    Test.create(request.body)
    .then((result)=>{
        return response.status(200).json({message: 'Test record created.'});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: 'Test record not created.'});
    })
}

export const removeRecord = (request,response,next)=>{
    Test.destroy({where: {id: request.body.id}})
    .then((result)=>{
        return response.status(200).json({message: 'Test record Deleted'});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: 'Test record not delete.'});
    })
}

export const fetchTest = (request,response,next)=>{
    Test.findAll({
        paranoid: false
    })
    .then(result=>{
        return response.status(200).json({result: result, status: true});
    }).catch(err=>{
        return response.status(200).json({error: "Error", status: false});
    });

}

export const allUserInfo = (request,response,next)=>{
  User.findOne({
    where: {id: request.body.id},
    include:[
        {
            model: Cart,
            include: Product
        },
        {
            model: Order,
            include: Product
        }
    ]
  }).then(result=>{
        return response.status(200).json({result: result, status: true});
    }).catch(err=>{
        console.log(err);
        return response.status(200).json({error: "Error", status: false});
    });   
}