import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="box">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about" >About</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    
    </div>
  )
}

export default Navbar
