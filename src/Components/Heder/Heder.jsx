import { Link, NavLink } from "react-router"
import './Hedar.css'

const Heder = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
      </nav>
    </div>
  );
}

export default Heder
