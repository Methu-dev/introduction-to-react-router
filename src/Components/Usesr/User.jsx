import { useLoaderData } from "react-router"
import Users from "../Users/Users";
import './user.css'

const User = () => {
    const user = useLoaderData()
    
  return (
    <div>
        <h2>User:{user.length}</h2>
      <h3>hello user how are you today</h3>
      <div className="user">
       {
        user.map(use => <Users key={use.id} use={use}/>)
       }
      </div>
    </div>
  )
}

export default User
