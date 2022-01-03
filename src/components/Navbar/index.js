import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../images/logoRM.png';
import { animateScroll as scroll } from 'react-scroll/modules';
import { Nav, NavbarContainer, NavLogo, Burger, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(false);
        } else {
            setScrollNav(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to="/" onClick={toggleHome}><img src={logo} alt="" width="80px" height="70px" /></NavLogo>
                  <Burger onClick={toggle}>
                      <FaBars />
                  </Burger>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="themes" spy={true} smooth={true} duration={500}>Thèmes</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="plateformes" spy={true} smooth={true} duration={500}>Plateformes</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="publications" spy={true} smooth={true} duration={500}>Publications</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="apropos" spy={true} smooth={true} duration={500}>À Propos</NavLinks>
                      </NavItem>
                      
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
