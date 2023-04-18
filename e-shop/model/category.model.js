import pool from '../db/dbConfig.js';
class Category{
    constructor(categoryName){
        this.categoryName = categoryName;
    }

    static getCategoryList(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
            if(!err){
              let sql = "select * from categories";
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

export default Category;