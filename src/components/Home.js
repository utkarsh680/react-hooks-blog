import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
function Home() {

  const [posts, setPosts] = useState([]);

    useEffect(() => {
        
      firestore
      .collection('posts')
      .onSnapshot(((snapshot) => {
          const newPosts = snapshot.docs.map((doc) =>({
              id: doc.id,
              ...doc.data()
          }))
          setPosts(newPosts);
      })) 
      
    }, []);

    return (
      <div className="hi">
       <h1>Tech blog</h1>
        <div id = "blog-by">Utkarsh singh</div>

         {posts.map((post, index) => (
            <div className="post" key={index}> 
              <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
              
              </Link>
              <p>{post.subTitle}</p>
            </div>
          ))}
      </div>
    );
  }
  
  export default Home;
  