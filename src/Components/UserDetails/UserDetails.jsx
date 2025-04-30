import { useLoaderData } from "react-router";


const UserDetails = ()=>{
  const user = useLoaderData();
  const {name} = user;

  return(
    <div>
      <h1>user name: {name}</h1>
    </div>
  )
}

export default UserDetails

