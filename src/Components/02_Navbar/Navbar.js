import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import './Navbar.css'

const navItems = ['', 'about', 'skill', 'project', 'contact'];
const navImg = [<AiOutlineHome />, <AiOutlineUser />, <BiBook />, <AiOutlineProject />, <BiMessageSquareDetail />,];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('')
  const clickHandler = (e) => {
    setActiveNav(e.currentTarget.id)
  }
  return (
    <nav>
      {navItems.map((e, i) => (
        <a
          onClick={clickHandler}
          id={e} key={e} href={`#${e}`}
          className={(activeNav === e) ? 'active' : ''}
        >
          {navImg[i]}
        </a>
      ))
      }
    </nav >
  )
}

export default Navbar