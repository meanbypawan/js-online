import pool from '../db/dbConfig.js';
import bcrypt from "bcryptjs";
class User{
    constructor(id,username,email,password){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    signin(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "select * from users where email = ?";
                  con.query(sql,[this.email],(err,result)=>{
                    if(!err){
                       if(result.length!=0){
                        let encryptedPassword = result[0].password;
                        
                        bcrypt.compare(this.password,encryptedPassword)
                        .then(status=>{
                            resolve(result[0].id);
                        }).catch(err=>{
                            reject(err);
                        })
                       } 
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
    save(){
      return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
            if(!err){
              let sql= "insert into users(username,email,password,contact) values(?,?,?,?)";
              
              con.query(sql,[this.username,this.email,this.password,this.contact],(err,results)=>{
                con.release();
                err ? reject(err) : resolve(results);
              });
            }
            else
              reject(err);
         })
      })
    }
}

export default User;