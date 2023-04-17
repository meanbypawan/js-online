import pool from '../db/dbConfig.js';
export default class Product{
   constructor(id,title,description,price,discountPercentage,rating,stock,brand,thumbnail,categoryName,imageArray){
     this.id = id;
     this.title = tilte;
     this.description = description;
     this.price = price;
     this.discountPercentage = discountPercentage;
     this.rating = rating;
     this.stock = stock;
     this.brand = brand;
     this.thumbnail = thumbnail;
     this.categoryName = categoryName;
     this.imageArray = imageArray;
   }

   static getList(){
      return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(!err){
               let sql = "select * from products";
               con.query(sql,(err,results)=>{
                  con.release();
                  err ? reject(err) : resolve(results);
               })
            }
            else
              reject(err);
          });    
      });
   }
}