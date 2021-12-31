import styled from 'styled-components'

export const ThemesContainer = styled.div`
  max-width: 1800px;
  backgound: rgb(187,186,185);
  height: 800px;
  padding: 0 30px; 
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  
`;

/*export const descP = styled.p`
  color: #5A6B50;
  font-size: 14px;
`; */
export const ThemeBg = styled.div`
  position: absolute;
  top: 0;
  right 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`



export const TextUl = styled.ul`
    color: #395E70;
    font-size: 24px;
    position: relative;
    padding: 0 30px 0 30px;
    margin-top: 30px;
    margin-botom: 100px;
    max-width: 800px;
  
    @media screen and (max-width: 900px) {
        font-size: 22px;  
    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
        
    }
    @media screen and (max-width: 584px) {
        font-size: 18px;
    }
`

export const TextLi = styled.li`
    font-size: 24px;
    margin-left: 40px;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 22px;  
    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    @media screen and (max-width: 584px) {
        font-size: 18px;
    }
`

export const ThemeSection = styled.div`
  z-index: 3;
  max-width: 1800px;
  position: absolute;
`;

export const MineEnergyContainer = styled.div`
    display: flex;
    
    justify-content: center;
    align-content: center;
    gap: 40px;
    
    @media screen and (max-width: 900px) {
        gap: 30px;
    }
    @media screen and (max-width: 768px) {
        gap: 20px;
    }
    @media screen and (max-width: 584px) {
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const EnergySection = styled.div`
    width: 350px;
    height: 350px;
    background: linear-gradient(to top, rgba(255,182,2,0), rgba(255,182,2,1));
    border-radius: 0 30px 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.30);
    display: grid;
    justify-content: end;
    align-items: end;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        width: 310px;
        height: 310px;  
    }
    @media screen and (max-width: 768px) {
        width: 260px;
        height: 260px;
    }
    @media screen and (max-width: 584px) {
        width: 190px;
        height: 190px;
    }
`;

export const MineSection = styled.div`
    width: 350px;
    height: 350px;
    background: linear-gradient(to top, rgba(0,170,222,0), rgba(0,170,222,1));;
    border-radius: 0 30px 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.30);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        width: 310px;
        height: 310px;  
    }
    @media screen and (max-width: 768px) {
        width: 260px;
        height: 260px;
    }
    @media screen and (max-width: 584px) {
        width: 190px;
        height: 190px;
    }
`;

export const Img = styled.img`
    width: 320px;
    height: 320px;

    @media screen and (max-width: 900px) {
        width: 280px;
        height: 280px;  
    }
    @media screen and (max-width: 768px) {
        width: 230px;
        height: 230px;
    }
    @media screen and (max-width: 584px) {
        width: 170px;
        height: 170px;
    }
`