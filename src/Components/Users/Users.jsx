import { Link } from "react-router";

const Users = ({use}) => {
    const {name,phone,email,website, id} = use;
    const userDataStyle ={
        border: "4px solid yellow",
        padding: '10px',
        borderRadius: '20px'
    }
  return (
    <div style={userDataStyle}>
      <h2>{name}</h2>
      <p>Phone:{phone}</p>
      <p>Eamil:{email}</p>
      <p>Website:{website}</p>
      <Link to={`/user/ ${id}`}>Show Details</Link>
    </div>
  );
}

export default Users
