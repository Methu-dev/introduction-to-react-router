import { Link,  useNavigate } from "react-router";

const Users = ({use}) => {
    const {name,phone,email,website, id} = use;
    const userDataStyle ={
        border: "4px solid yellow",
        padding: '10px',
        borderRadius: '20px'
    };
    const Navigate = useNavigate()
    const handleShowDetails = ()=>{
         Navigate(`/user/${id}`);
    }
  return (
    <div style={userDataStyle}>
      <h2>{name}</h2>
      <p>Phone:{phone}</p>
      <p>Eamil:{email}</p>
      <p>Website:{website}</p>
      {/* <Link to={`/user/${id}`}>Show Details</Link> */}
      <button onClick={handleShowDetails}>Show Details</button>
    </div>
  );
}

export default Users
