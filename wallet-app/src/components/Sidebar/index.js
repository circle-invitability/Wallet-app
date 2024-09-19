import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarRoute, SidebtnWrap, SideBarLink } from './SidebarElements';



const Sidebar = ({ isOpen, toggle }) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SideBarLink to='about' onClick={toggle}>
             About
            </SideBarLink>
            <SideBarLink to='discover' onClick={toggle}>
             Discover
            </SideBarLink>
            <SideBarLink to='service' onClick={toggle}>
             Services
            </SideBarLink>
            <SideBarLink to='signup' onClick={toggle}>
             Sign Up
            </SideBarLink>
          </SidebarMenu>
          
          <SidebtnWrap>
          <SidebarRoute to='signin'>
            Sign In
            </SidebarRoute>
          </SidebtnWrap>

        </SidebarWrapper>
      </SidebarContainer>
  );
}

export default Sidebar;