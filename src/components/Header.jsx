import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
  <header className='head'>
    <nav >
      <ul>
        <li> <Link to="/">home</Link></li>
        <li> <Link to="/projects">projects</Link></li>
        <li> <Link to="/contact">contact</Link></li>
        <li> <Link to="/testimonials">testimonials</Link></li>
      </ul>
    </nav>
 </header>
  )
}

export default Header