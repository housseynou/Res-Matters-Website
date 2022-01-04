import React from 'react';
//import Video from '../../videos/matter.mp4';
import energy from '../../images/lightbulb.png';
import mine from '../../images/pickaxe.png';
import back from '../../images/backg.jpg'
import { Strong, EnergySection, MineEnergyContainer, MineSection, ThemeBg, TextUl, TextLi, ThemesContainer, ThemeSection, Img, BackgImg } from './ThemeElements';

function Themes() {
    return (
        <ThemesContainer id="themes">
            <ThemeBg>
                <BackgImg src={back} alt="background" />
            </ThemeBg>
            
            <ThemeSection>
                <TextUl><Strong>Resource Matters</Strong> est un organisme non gouvernemental qui a pour but de:
                    <TextLi>
                        Lutter pour la transparence et la bonne gestion des ressources miniers .
                    </TextLi>
                    <TextLi>
                        Oeuvrer pour l'électrification à 100% de la RDC d'ici 2030.
                    </TextLi>
                  </TextUl>
                <MineEnergyContainer>
                    <EnergySection><Img to='energy' src={energy} alt="energy" /></EnergySection>
                    <MineSection><Img to='mine' src={mine} alt="mine" /></MineSection>
                </MineEnergyContainer>
            </ThemeSection>
        </ThemesContainer>
    );
};

export default Themes