import React from 'react'
import {useLoaderData, useNavigate } from 'react-router'

const PostDetails = () => {
    const post = useLoaderData();
    const { userId, id, body } = post;
    const Navigate = useNavigate()
    const handleBackbtn = ()=>{
        Navigate(-1)
    }
  return (
    <div>
      <h3>post details: {id}</h3>
      <p>userId : {userId}</p>
      <p>details body: {body}</p>
      <button onClick={handleBackbtn}>Go Back</button>
    </div>
  );
}

export default PostDetails
