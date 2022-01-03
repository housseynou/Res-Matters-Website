import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";


export const Post = styled.div`
    padding: 4rem;
    background: #fff;
    
    
`
  
export const PostTitle = styled.h1`
    text-align: center;
    margin-top: 20px;
`
  
export const PostContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 70%;
    z-index: 1;
    margin: 0 auto;
    
    
    
`
  
export const PostWrapper = styled.div` 
    position: relative;
    margin: 30px 0 0px;
    
`
/* In PostWrapper =  margin: 30px 0 30px; */
export const PostItems = styled.ul`
    margin-bottom: 10px;

    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`
  
export const PostItem = styled.li`
    display: flex;
    flex: 1;
    margin: 0 0.5rem;
    border-radius: 10px;

    @media only screen and (max-width: 1024px) {
        margin-bottom: 1rem;
    }
`
  
export const PostLink = styled(LinkRouter)`
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
`
  
 export const PostImgWrap = styled.figure`
    position: relative;
    width: 100%;
    padding-top: 60%;
    overflow: hidden;

    &::after {
        content: attr(data-category);
        position: absolute;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 8px;
        max-width: calc((100%) - 60px);
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background-color: #1f98f4;
        box-sizing: border-box;
    }
`
  
 /* .fade-img {
    animation-name: fade-img;
    animation-duration: 2s;
  }
  
  .cards__item__pic-wrap::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
  */
 export const PostImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.1);
    }
`
  

  
 export const PostInfo = styled.div`
    padding: 10px 10px 10px;
`
  
 export const PostText = styled.h5`
    color: #005e7e;
    font-size: 18px;
    line-height: 20px;
`
  
/*  @media only screen and (min-width: 1200px) {
    .content__blog__container {
      width: 84%;
    }
  } */
