import { useSelector } from "react-redux"

export default function User(){
    const {name,age,mobile} = useSelector((store)=>store.user);
    return <>
      <h1>User Component</h1>
      Name {name}
      Age  {age}
      Mobile {mobile}
    </>
}