import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="underline">
        <li className="item">Home</li>
        <li className="item">About</li>
        <li className="item">Services</li>
        <li className="item">Blog</li>
        <li className="item">Contact</li>
      </ul>
    </nav>
  )
}

export default Header
