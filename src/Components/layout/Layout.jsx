import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

 // ========== Layout Component start ========== //
 const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
 }

 export default Layout
