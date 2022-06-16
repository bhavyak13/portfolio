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
import Experience from './Components/05_Experience/Experience'
import Projects from './Components/06_Projects/Projects'
import Certificates from './Components/07_Certificates/Certificates'
import Contact from './Components/08_Contact/Contact'
import Footer from './Components/09_Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <Navbar />
    </>
  );
}

export default App;
