import styled from 'styled-components';
import {Link as LinkScroller} from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  background: rgba(200,193,183,0.95);
  width: 100%;
  height: 100%;
  position: fixed;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #395E70;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none; 
`

export const SidebarWrapper = styled.div`
  color: #97A923;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px){
      grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkScroller)`
  display: flex: 
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #395E70;
  cursor: pointer;

  &.hover {
      color: #01bf71;
      transition: 0.2s ease-in-out;
  }
`