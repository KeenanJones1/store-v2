import React from 'react'
import PageLinks from '../constants/links'

const Navbar = () => {
 return (
  <nav className="navbar">
   <div className="nav-center">
    <PageLinks styleClass="nav-links"/>
   </div>
  </nav>
 )
}

export default Navbar
