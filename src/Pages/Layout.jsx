import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Navbar/Navbar'
const Layout = () => {
    return (
        <div>
            <Header/>
            <div className="min-h-screen">
               <Outlet/>
            </div>
            <Footer />
        </div>
    )
}

export default Layout