import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";

function PostDetail() {

  const[posts, setPosts] = useState([]);
  const { postId } = useParams();

  useEffect(() => {

    firestore
    .collection('posts')
    .doc(postId)
    .get()
    .then((snapshot) => {
        setPosts(snapshot.data());
    })
    .catch((error) => {
        console.log(error);
    })
  }, []);

    return (
      <div className="">
        <h1>Post Detail</h1>
        
            <div className="post">
              <h3>{posts.title}</h3>
              <p>{posts.subTitle}</p>
              <p>{posts.content}</p> 
             </div>
      </div>
    );
  }
  
  export default PostDetail;
  