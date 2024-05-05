import { useState } from 'react'
import UserForm, { FormValue } from './UserForm'

export interface FormData extends FormValue & id:string;

function UserList() {
    const [users,setUsers]=useState<FormData[]>([])
    const addUser=(formData:FormValue)=>{
        setUsers({...formData,id:"10"})
    }
  return (
    <div>
        <UserForm sendData={addUser} />
    </div>
  )
}

export default UserList