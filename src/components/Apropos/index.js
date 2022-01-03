import React from 'react';
import money from '../../images/money.svg';
import elect from '../../images/elect.svg';
import goal from '../../images/goal.svg';
import { AproposContainer, AproTitle, AproWrapper, AproItem, AproIcon, AproItemTitle, AproItemText } from './ApropoElmts';

const Apropos = () => {
    return (
        <>
            <AproposContainer id="apropos">
                <AproTitle>Nos objectifs</AproTitle>
                <AproWrapper>
                    <AproItem>
                        <AproIcon src={money} />
                        <AproItemTitle>Les Redevances</AproItemTitle>
                        <AproItemText>Les redevances liés à l'exploitation des ressources minière ne sont pas toujours perçues par les ITE. Nous espérons que le projet MAKUTA permettra de régler ce problème pour de bon</AproItemText>
                    </AproItem>
                    <AproItem>
                        <AproIcon src={elect} />
                        <AproItemTitle>L'electrification</AproItemTitle>
                        <AproItemText>Pour une électrification à 100% de la RDC d'ici 2030, nous avons créé un outils qui permettra, à travers des scénarios, de connaitre le moyen d'électrification la plus avantageuse pour une localité donnée.</AproItemText>
                    </AproItem>
                    <AproItem>
                        <AproIcon src={goal} />
                        <AproItemTitle>Nos réalisations</AproItemTitle>
                        <AproItemText>Nous avons plusieurs plateformes dont <trong>SUPPLY CHAINS</trong> qui permet de retracer les chaines d'approvisionnement du cuivre et du cobalt. 2 autres plateformes sont en cours de production: <trong>MAKUTA</trong> et <trong>MWINDA</trong></AproItemText>
                    </AproItem>
                </AproWrapper>
            </AproposContainer>
        </>
    )
}

export default Apropos
