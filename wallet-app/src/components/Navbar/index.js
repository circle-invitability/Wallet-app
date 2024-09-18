import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Nav,
   NavContainer,
   NavLogo,
  MobileIcon,
  MobileMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink } from './NavbarElements.js'

const Navbar = () => {
  return (
   <Nav>
    <NavContainer>
      <NavLogo to='/'>dolla</NavLogo>
      <MobileIcon>
        <FaBars />
      </MobileIcon>

      <MobileMenu>
        <NavItem>
          <NavLinks to="about">About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="discover">Discover</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="services">Services</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="signup">Sign Up</NavLinks>
        </NavItem>
        <NavBtn>
          <NavBtnLink to="signin">Sign In</NavBtnLink>
        </NavBtn>
      </MobileMenu>
    </NavContainer>
   </Nav>
  )
}

export default Navbar