import { useLoaderData } from "react-router";
import Post from "../Post/Post";
import './Posts.css'
const Posts = () => {
   const posts = useLoaderData();
  return (
    <div>
      <h2>Post data: {posts.length}</h2>
      <div className="user">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts
