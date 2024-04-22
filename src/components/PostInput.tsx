import { useState } from "react"

interface FormValue{
    title:string,
    body:string
}

function PostInput() {
    const [formVal,setFormVal]=useState<FormValue>({title:"",body:""})
    const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
setFormVal({...formVal,[e.target.name]:e.target.value})
    }
    const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formVal)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
           <div>
           <label htmlFor="title">title</label>
            <input type="text" name="title" value={formVal.title} onChange={changeHandler} id="title" />
           </div>
            <div>
            <label htmlFor="body">body</label>
            <input type="text" name="body" value={formVal.body} onChange={changeHandler} id="body" />
            </div>
            <input type="submit"  value="Add" />
        </form>
    </div>
  )
}
export default PostInput