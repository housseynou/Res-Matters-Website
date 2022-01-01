import React from 'react';
//import Video from '../../videos/matter.mp4';
import energy from '../../images/lightbulb.png';
import mine from '../../images/pickaxe.png';
import back from '../../images/backg.jpg'
import { EnergySection, MineEnergyContainer, MineSection, ThemeBg, TextUl, TextLi, ThemesContainer, ThemeSection, Img, BackgImg } from './ThemeElements';

function Themes() {
    return (
        <ThemesContainer id="themes">
            <ThemeBg>
                <BackgImg src={back} alt="background" />
            </ThemeBg>
            
            <ThemeSection>
                <TextUl>Resource Matters est un organisme non gouvernemental qui a pour but de:
                    <TextLi>
                        Lutter pour la bonne gestion des ressources miniers et la transparence des 
                        redevances payées par les entreprises exploitrices aux collectivités locales.
                    </TextLi>
                    <TextLi>
                        Oeuvrer pour l'électrification à faible coût et la plus adaptée dans toute la RDC 
                        d'ici 2030, et mettre à la disposition de la population congolaise, un outil
                        de modélisation et de scénarisation pour l'électrification d'une zone donnée.
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