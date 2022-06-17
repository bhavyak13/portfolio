import React from 'react'
import HeaderSocials from '../01_Header/HeaderSocials'
import './Footer.css'

const links = ['Home', 'About', 'Skill', 'Experience', 'Project', 'Certificate', 'Contact'];
const footer = () => {
  return (
    <footer id='footer'>
      <a href='#Home' className='footer-logo'>Bhavya Kawatra</a>
      <ul className='links'>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
      <HeaderSocials classN='footer__socials' />
      <div className='footer__copyright'>
        <small>&copy; Bhavya Kawatra. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer