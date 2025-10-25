import { Outlet } from 'react-router-dom'
import Footer from "./Footer"

const MainLayout = () => {
  return (
    <div>
      <h1>main layout</h1>
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
