import { Link, useNavigate,} from "react-router";

const Post = ({ post }) => {
    const navigate = useNavigate()
    const { body, title, userId, id } = post;
   
    const postUserDataStyle = {
      border: "4px solid yellow",
      padding: "10px",
      borderRadius: "20px",
    };
     const handlePost = () => {
       navigate(`/post/${id}`);
     };
    
  return (
    <div style={postUserDataStyle}>
      <h3>body: {body}</h3>
      <p>tatile: {title}</p>
      <p>userId: {userId}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={handlePost}>Post Detailas</button>
    </div>
  ); 
};

export default Post
