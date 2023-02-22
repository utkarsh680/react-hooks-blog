import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul id='nav'>
        <li>
          <Link to="/" >Home</Link> 
          <Link to="/create-post" style={{marginLeft:5}}>Create Post</Link>
         
        </li>
      </ul>
    </div>
  );
}

export default Navbar;


