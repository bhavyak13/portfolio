import React from 'react'
import Header from './Components/01_Header/Header'
import Navbar from './Components/02_Navbar/Navbar'
import About from './Components/03_About/About'
import Experience from './Components/04_Experience/Experience'
import Services from './Components/05_Services/Services'
import Testimonials from './Components/06_Testimonials/Testimonials'
import Contact from './Components/07_Contact/Contact'
import Footer from './Components/08_Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;