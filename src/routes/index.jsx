import { Navigate, Route, Routes } from "react-router-dom"
import Header from "../components/header/index"
import Footer from "../components/footer"
import App from "../App"

const CustomRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Footer />} />
    </Routes>  
  )
}

export default CustomRoutes