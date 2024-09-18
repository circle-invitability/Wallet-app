import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebtnWrap, SidebarLink } from './SidebarElements';



const Sidebar = () => {
  return (
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about'>
             About
            </SidebarLink>
            <SidebarLink to='discover'>
             Discover
            </SidebarLink>
            <SidebarLink to='service'>
             Services
            </SidebarLink>
            <SidebarLink to='signup'>
             Sign Up
            </SidebarLink>
          </SidebarMenu>
          
          <SidebtnWrap>
          <SidebarRoute to='signin'>Sign In</SidebarRoute>
          </SidetnWrap>
        </SidebarWrapper>
      </SidebarContainer>
  )
}

export default Sidebar