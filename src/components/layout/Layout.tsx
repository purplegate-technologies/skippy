import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"
import TopNav from "../topnav/TopNav"
import "./layout.css"

const Layout = () => {
  return (
    <>
      <section className={`layout`}>
        <Sidebar />
        <div className="layout__content">
          <TopNav />
          <div className="layout__content-main">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout
