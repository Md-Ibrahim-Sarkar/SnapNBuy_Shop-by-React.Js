import { Outlet } from "react-router-dom"
import Header from "../Pages/Header/Header"
import Before_Header from "../Pages/Header/Before_Header"
import Footer from "../Pages/Footer/Footer"

function Layout() {
  return (
    <div>
      <div className="max-[640px]:hidden">
      <Before_Header />
     </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout