import { useDispatch } from "react-redux"
import { changeValue } from "../redux-data/MasterSlice"

export default function ChangeTitle(){
    const dispatch = useDispatch();    
    const changeTitle = ()=>{
      dispatch(changeValue("RTK Implementation"));
    }
    return <>
      Change Title Component...
      <button onClick={changeTitle}>Change Title</button>
    </>
}