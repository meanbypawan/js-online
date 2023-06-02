import axios from "axios";
import WebApi from "../../apis/WebApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-config/UserSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signIn = async (event)=>{
        event.preventDefault();
        try{
           let response = await axios.post(WebApi.USER_SIGNIN,{email,password});
           console.log(response);
           if(response.status)
            dispatch(setUser(response.user));
           navigate("/");
        }
        catch(error){
            console.log(error);
        }
    }
    return <>
      <h1>Sign in Component</h1>
      <div className="container mt-5">
        <form onSubmit={signIn}>
            <div className="form-group">
               <label>Email</label>
               <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control"/>  
            </div>
            <div className="form-group">
               <label>Password</label>
               <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control"/>  
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Signin</button>
            </div>
        </form>
        </div>
    </>
}