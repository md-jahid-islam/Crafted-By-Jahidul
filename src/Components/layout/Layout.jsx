import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ContactAppsComponents from '../ContactApps/ContactAppsComponents'
import Footer from '../../Pages/Footer'
 // ========== Layout Component start ========== //
 const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <ContactAppsComponents/>
    </>
  )
 }

 export default Layout
