import { useLoaderData, useNavigate } from "react-router";


const UserDetails = ()=>{
  const user = useLoaderData();
  const { name, id } = user;
  const navigate = useNavigate();
  const handleGoBackBtn = ()=>{
    navigate(-1);
  }

  return(
    <div>
      <h1>user name: {name}</h1>
      <p>id: {id}</p>
      <button onClick={handleGoBackBtn}>Go Back</button>
    </div>
  )
}

export default UserDetails

