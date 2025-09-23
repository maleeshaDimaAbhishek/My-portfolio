import React from 'react'
import './NavbAr.css'
import logo from '../../assets/logo.png'
function NavbAr() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="navmenu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With me</div>
    </div>
  )
}

export default NavbAr