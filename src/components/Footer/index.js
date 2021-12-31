import React from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrapper, FooterLinkTitle, FooterLinkItems, FooterLink,
        SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRight
} from './FooterElement';
import logo from '../../images/logoRM.png';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>À Propos de Nous</FooterLinkTitle>
                            <FooterLink to='link'>L'équipe</FooterLink>
                            <FooterLink to='link'>Les Partenaires</FooterLink>
                            <FooterLink to='link'>Les Projets</FooterLink>
                            <FooterLink to='link'>Nos Plateformes</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                            <FooterLink to='link'>Adresse: Boulevard Madou, 7&8 Saint-Josse-Ten-Noode</FooterLink>
                            <FooterLink to='link'>N°Tel: 0032123456789</FooterLink>
                            <FooterLink to='link'>Email: info@resourcematters.org</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <img src={logo} alt="" width="80px" height="70px" />
                        </SocialLogo>
                        <WebsiteRight>Resource Matters © {new Date().getFullYear()} All right reserved.</WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
