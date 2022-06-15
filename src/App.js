/*

experience ->skills
services -> experience
Projects -> projects
testimonials -> certificates

*/

import React from 'react'
import Header from './Components/01_Header/Header'
import Navbar from './Components/02_Navbar/Navbar'
import About from './Components/03_About/About'
import Skills from './Components/04_Skills/Skills'
// import Certificates from './Components/06_Certificates/Certificates'
import Experience from './Components/05_Experience/Experience'
import Contact from './Components/07_Contact/Contact'
import Footer from './Components/08_Footer/Footer'
import Projects from './Components/06_Projects/Projects'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      {/* <Certificates /> */}
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Navbar />
    </>
  );
}

export default App;
