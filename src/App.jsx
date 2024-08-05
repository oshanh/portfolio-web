import { useState } from 'react'

import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Navigator from './common/Navigator';

function App() {

  return (
    <>
    <Navigator/>
    <div id="sections">
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
     <Footer/>
    </div>
     
     
    </>
  )
}

export default App
