import pool from '../db/dbConfig.js';
class Cart{
   constructor(id, userId){
    this.id = id;
    this.userId = userId;
   }
   isExist(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
              let sql = "select * from carts where userId = ?";
              con.query(sql,[this.userId],(err,result)=>{
                if(result.length)
                  resolve({status: true, cartId: result[0].id});
                else
                  resolve(false);  
              })
            }
            else
              reject(err);
         })
     });
   }
   createCart(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
              let sql = "insert into carts(userId) values(?)";
              con.query(sql,[this.userId],(err,result)=>{
                if(!err){
                   con.release();
                   err ? reject(err) : resolve(true);
                }
                else
                  reject(err);
              })
            }
            else
              reject(err);
         })
     });
   }
}

export default Cart;