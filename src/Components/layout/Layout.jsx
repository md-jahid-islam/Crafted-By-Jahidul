import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ContactAppsComponents from '../ContactApps/ContactAppsComponents'

 // ========== Layout Component start ========== //
 const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ContactAppsComponents/>
    </>
  )
 }

 export default Layout
