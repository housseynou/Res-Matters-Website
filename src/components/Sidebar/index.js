import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

function Sidebar({ isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="themes" onClick={toggle}>Thèmes</SidebarLink>
                   <SidebarLink to="plateformes" onClick={toggle}>Plateformes</SidebarLink>
                   <SidebarLink to="publications" onClick={toggle}>Publications</SidebarLink>
                   <SidebarLink to="lequipe" onClick={toggle}>L'Equipe</SidebarLink>
                   <SidebarLink to="involved" onClick={toggle}>Get Involved</SidebarLink>
               </SidebarMenu>
           </SidebarWrapper> 

        </SidebarContainer>
    )
}

export default Sidebar
