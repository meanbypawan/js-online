import { useSelector } from "react-redux"

export default function Second(){
    const {title} = useSelector((state)=>state.myData);
    return <>
      <h1>Second Component..{title}</h1>
    </>
}