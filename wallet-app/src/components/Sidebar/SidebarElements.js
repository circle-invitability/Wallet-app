import styled from "styled-components"
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'



export const SidebarContainer = styled.aside`
background: #0d0d0d;
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.03a all ease-in-out;
opacity: ${function({isOpen}) {
  return  isOpen ? '100%' : '0';
}};
top: ${function({isOpen}) {
  return (isOpen ? '0' : '-100%')
  }};
`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
left: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarLink = styled(LinkS)`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s all ease-in-out;
color: #fff;
cursor: pointer;

&:hover {
  color: #01bf71;
  transition: 0.2s ease-in-out;
}
`

export const SidebtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  color: #010606;
}
`