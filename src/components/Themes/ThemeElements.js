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

export const BackgImg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
/* BackgImg: url('../../images/image.jpg') center center/cover no-repeat */

export const TextUl = styled.ul`
    color: #395E70;
    font-size: 24px;
    position: relative;
    padding: 0 30px 0 30px;
    margin-top: 150px;
  
    max-width: 800px;
  
    @media screen and (max-width: 900px) {
        font-size: 22px;  
    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
        max-width: 450px;
        text-align: center;
        
    }
    @media screen and (max-width: 584px) {
        font-size: 18px;
        max-width: 400px
    }
`

export const Strong = styled.strong`
    color: #0585AC;
     
`

export const TextLi = styled.li`
    font-size: 24px;
    margin-left: 40px;
    text-align: center;
    margin-top: 10px;

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
    margin-top: 30px;
    
    @media screen and (max-width: 900px) {
        gap: 30px;
    }
    @media screen and (max-width: 768px) {
        gap: 20px;
    }
    @media screen and (max-width: 584px) {
        gap: 10px;
        
    }
`
/* In @media screen flex-direction: column;
        justify-content: center;
        align-items: center;*/

export const EnergySection = styled.div`
    width: 280px;
    height: 280px;
    background: linear-gradient(to top, rgba(255,182,2,0), rgba(255,182,2,1));
    border-radius: 0 30px 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.30);
    display: grid;
    justify-content: end;
    align-items: end;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        width: 270px;
        height: 270px;  
    }
    @media screen and (max-width: 768px) {
        width: 210px;
        height: 210px;
    }
    @media screen and (max-width: 584px) {
        width: 140px;
        height: 140px;
    }
`;

export const MineSection = styled.div`
    width: 280px;
    height: 280px;
    background: linear-gradient(to top, rgba(0,170,222,0), rgba(0,170,222,1));;
    border-radius: 0 30px 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.30);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        width: 270px;
        height: 270px;  
    }
    @media screen and (max-width: 768px) {
        width: 210px;
        height: 210px;
    }
    @media screen and (max-width: 584px) {
        width: 140px;
        height: 140px;
    }
`;

export const Img = styled.img`
    width: 260px;
    height: 260px;

    @media screen and (max-width: 900px) {
        width: 250px;
        height: 250px;  
    }
    @media screen and (max-width: 768px) {
        width: 190px;
        height: 190px;
    }
    @media screen and (max-width: 584px) {
        width: 120px;
        height: 120px;
    }
`