import React from 'react'
import { Nav, NavContainer, NavLogo } from './NavbarElements'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
  return (
   <Nav>
    <NavContainer>
      <NavLogo to='/'>dolla</NavLogo>
      <MobileIcon>
        <FaBars />
      </MobileIcon>
    </NavContainer>
   </Nav>
  )
}

export default Navbar