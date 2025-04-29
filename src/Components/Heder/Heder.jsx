import { Link } from "react-router"
import './Hedar.css'

const Heder = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        <Link to="/contact">contact</Link>
        
      </nav>
    </div>
  )
}

export default Heder
