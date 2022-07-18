import React from 'react'
import {NavLink} from "react-router-dom";
import"./header.css"

const Header = () => {
  return (
    <> 
    <header>
    <a href="/">Logo</a>
    <nav className='nav-links'>
    <ul className='nav-links'>
        <li>
        <NavLink to={"/"}> Home</NavLink>
        </li>
        <li> 
        <NavLink to={"/about"}> About</NavLink>
        </li>
        <li>
        <NavLink to="/contact"> Contact</NavLink>
        </li>
    </ul>
    </nav>
    </header>
  </>

  )
}

export default Header