import { Outlet } from "react-router"
import Heder from "../Heder/Heder"
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <div>

        <Heder />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Home
