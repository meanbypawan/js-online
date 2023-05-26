import { useSelector } from "react-redux"
import User from "./User";

export default function First(){
    const {title,name} = useSelector((state)=>state.myData);
    return <>
      <h1>First Component..{name}</h1>
      <User/>
    </>
}