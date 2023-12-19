// import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"


const Home = () => {
  return (
    <>
      <Navbar />
      <div ><Carousel/></div>
      <div className="m-2">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>
      <Footer />
    </>
  )
}

export default Home