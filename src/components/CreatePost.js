
import { firestore } from "../firebase";
import useFormInput from "../hooks";
import {toast } from 'react-toastify';
function CreatePost() {

    const title = useFormInput("");
    const subTitle = useFormInput("");
    const content = useFormInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('title', title);
        console.log('subTitle', subTitle);
        console.log('content', content);
        try{
        firestore.collection('posts').add({
            title: title.value,
            subTitle: subTitle.value,
            content: content.value,
            createAt: new Date()
        });
        toast.success('Post created successfully');
      } catch(error){
        toast.error('Error adding post');
      }
         
    }
  
    return (
      <div className="create-post">
       <h1>Create Post</h1>

       <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} required/>
        </div>

        <div className="form-field">
          <label>Sub title</label>
          <input {...subTitle} required/>
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content} required>

          </textarea>
        </div>
        <button className="create-post-btn">Create Post</button>

       </form>

      </div>
    );
  }
  
  export default CreatePost;
  