import { useEffect, useState } from "react";
import { firestore } from "../firebase";

function PostDetail() {

  const[posts, setPosts] = useState([]);

  useEffect(() => {

    firestore
    .collection('posts')
    .onSnapshot(((snapshot) => {
        const newPosts = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data()
        }))
        setPosts(newPosts);
    }
    ))
  }, []);

    return (
      <div className="">
        <h1>Post Detail</h1>
        {posts.map((post, index) => (
            <div className="post" key={index}>
              <h3>{post.title}</h3>
              <p>{post.subTitle}</p>
              <p>{post.content}</p> 
             </div>
          ))}
      </div>
    );
  }
  
  export default PostDetail;
  