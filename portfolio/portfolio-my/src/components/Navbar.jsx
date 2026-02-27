import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Shashank</h1>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
