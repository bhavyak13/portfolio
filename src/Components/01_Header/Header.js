import React from 'react'
import dp from '../../assets/dp.jpg'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  return (
    <header id="Home">
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Bhavya Kawatra</h1>
        <h5 className='text-light'>MERN Stack Developer</h5>
        <CTA />
        <HeaderSocials classN={'header__socials'} />
        <div className='me'>
          <img src={dp} className='' alt='me' />
        </div>
        <a href='#Contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header