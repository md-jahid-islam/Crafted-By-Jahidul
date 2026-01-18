import React from 'react'
import HomeComponents from '../Components/home/HomeComponents'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import ContactComponents from '../Components/Contact/ContactComponents'
import Service from './Service'
import Garments from './Garments'

 // ========== Home page start ========== // 
 const Home = () => {
  return (
    <>
      <HomeComponents />
      <About />  
      <Service/>
      <Garments/>   
      <Skills />
      <Projects />
      <ContactComponents />
    </>
  )
 }

 export default Home
