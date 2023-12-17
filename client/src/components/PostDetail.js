// PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    // Fetch details for the selected post
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching single post:', error));
  }, [postId]);

  return (
    <div>
      <Header/>
      <div>
      <h1 style={{display:"flex",justifyContent:"center", fontWeight:700,marginTop:"40px",
      
      }}>
        Post Detail Page</h1>
      <hr style={{color:"black", borderWidth:"2px"}}></hr>
      {/* Display details for the selected post */}
      {post && (
        <div className='post-detail' style={{width:"50%"}}>
          <h2 style={{marginTop:"40px",marginLeft:"125px"}}>{post.title}</h2>
          <p style={{marginTop:"20px",marginLeft:"125px"}}>{post.body}</p>
        </div>
      )}
    </div>
    <Footer/>
    </div>
    
  );
};

export default PostDetail;
