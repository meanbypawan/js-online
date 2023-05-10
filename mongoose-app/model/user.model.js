import mongoose from "mongoose";

// Defining sturucture of document
const userSchema = new mongoose.Schema({
   name:{
    type: String,
    set: function(v){
        return v.toUpperCase();
    }
   },
   email:String,
   password: String,
   contact: Number 
},{
    versionKey: false
});


userSchema.methods.sayHi = function(){
    console.log("Hi User....");
};

userSchema.statics.sayHello = function(){
    console.log("Hello User.....");
}
export const User = mongoose.model("user",userSchema);
// User model class is created
/*
  User.create()
  User.find()
  User.updateOne(),
  User.remove()
  User.aggregate()
*/

