import React from 'react'
import HomeComponents from '../Components/home/HomeComponents'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import ExperienceComponents from '../Components/Experience/ExperienceComponents'
import AchievementsComponents from '../Components/Achievements/AchievementsComponents'
import ContactComponents from '../Components/Contact/ContactComponents'

 // ========== Home page start ========== // 
 const Home = () => {
  return (
    <>
      <HomeComponents />
      <About />
      <Skills />
      <Projects />
      <ExperienceComponents />
      <AchievementsComponents />
      <ContactComponents />
    </>
  )
 }

 export default Home
