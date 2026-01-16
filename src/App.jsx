import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Components/layout/Layout'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import ExperienceComponents from './Components/Experience/ExperienceComponents'
import AchievementsComponents from './Components/Achievements/AchievementsComponents'
import ContactComponents from './Components/Contact/ContactComponents'
import Service from './Pages/Service'
import Garments from './Pages/Garments'
import QuickQuote from './Pages/QuickQuote'
import Footer from './Pages/Footer'
import Process from './Pages/Process'
import FQA from './Pages/FQA'

 function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Service' element = {<Service/>}/>
            <Route path='/QuickQuote' element = {<QuickQuote/>}/>
            <Route path='/Garments' element = {<Garments/>}/>
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Experience' element={<ExperienceComponents />} />
            <Route path='/Achievements' element={<AchievementsComponents />} />
            <Route path='/FQA' element={<FQA />} />            
            <Route path='/Process' element={<Process />} />
            <Route path='/Contact' element={<ContactComponents />} />
            <Route path='/Footer' element={<Footer />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
 }
 
 // ========== Exporting the App Components end ========== // 
 export default App
