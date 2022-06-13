import React from 'react'
import dp from '../../assets/dp.jpg'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Bhavya Kawatra</h1>
        <h5 className='text-light'>MERN Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={dp} className='' alt='me' />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header