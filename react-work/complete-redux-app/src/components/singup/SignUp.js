import axios from "axios";
import { useState } from "react"
import WebApi from "../../apis/WebApi";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [contact,setContact] = useState("");
    const signUp =  async (event)=>{
        event.preventDefault();
        try{
            let response = await axios.post(WebApi.USER_SIGNUP,{name,email,password,contact});
            toast.success("Sign up success");
        }
        catch(error){
          console.log(error);
          toast.error("Oops! something went wrong..");
        }
    }
    return <>
       <ToastContainer/>
       <div className="container mt-5">
        <form onSubmit={signUp}>
            <div className="form-group">
               <label>Name</label>
               <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control"/>  
            </div>
            <div className="form-group">
               <label>Email</label>
               <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>  
            </div>
            <div className="form-group">
               <label>Password</label>
               <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>  
            </div>
            <div className="form-group">
               <label>Contact</label>
               <input type="text" onChange={(e)=>setContact(e.target.value)} className="form-control"/>  
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Signup</button>
            </div>
        </form>
       </div>
    </>
}