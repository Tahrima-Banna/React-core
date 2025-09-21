import {use} from "react"
export default function User({fetchUsers}){
   
    const users = use(fetchUsers);
    return (
        <div className="section">
            <h1>User:{users.length}</h1>
        </div>
    )
}