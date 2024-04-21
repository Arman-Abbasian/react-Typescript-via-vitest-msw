import { useState } from "react"

interface FormValue{
    title:string,
    body:string
}

function PostInput() {
    const [formVal,setFormVal]=useState<FormValue>({title:"",body:""})
    const changeHandler=(e)=>{
setFormVal({...formVal,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <div>
            <label htmlFor="title">title</label>
            <input type="text" value={formVal.title} onChange={changeHandler} id="title" />
            <input type="text" value={formVal.body} onChange={changeHandler} id="title" />
            <input type="submit" value="Add"/>
        </div>

    </div>
  )
}

export default PostInput