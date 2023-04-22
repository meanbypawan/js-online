import pool from '../db/dbConfig.js';
class CartItems{
   constructor(id, cartId, productId){
    this.id = id;
    this.cartId = cartId;
    this.productId = productId;
   }

   save(userId){
     return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
            if(!err){
               let sql = "select * from carts where userId = ?";
               con.query(sql,[userId],(err,result)=>{
                if(!err){
                  let cartId = result[0].id;
                  sql = "insert into cartItems(cartId,productId) values(?,?)";
                  con.query(sql,[cartId,this.productId],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(true);
                  })
                }
                else
                  reject(err);
               });
            }
            else
              reject(err);
         })
     });
   }
   static isProductExist(productId,cartId){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
               let sql = "select * from cartItems where productId = ? and cartId = ?";
               con.query(sql,[productId,cartId],(err,result)=>{
                con.release();
                if(!err){
                   if(result.length)
                     resolve(true);
                   else
                     resolve(false);  
                }
                else
                  reject(err);
               })
            }
            else
              reject(err);
        })
      })
   }
}

export default CartItems;