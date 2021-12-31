import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./public.css";
//import { PostImg } from './PostData';



function Slider ()  {
    const baseUrl = "http://react-responsive-carousel.js.org/assets/";
    const datas = [
        {
            id: 1,
            image: `${baseUrl}1.jpeg`,
            title: "Titre du Post",
            text: `Un descriptif du post. Un texte bien developpé qui permet à chacun de lire et comprendre le post. Si tu vois ce que je veux dire`
        },
        {
            id: 2,
            image: `${baseUrl}2.jpeg`,
            title: "Titre du Post",
            text: `Un descriptif du post. Un texte bien developpé qui permet à chacun de lire et comprendre le post. Si tu vois ce que je veux dire`
        },
        {
            id: 3,
            image: `${baseUrl}3.jpeg`,
            title: "Titre du Post",
            text: `Un descriptif du post. Un texte bien developpé qui permet à chacun de lire et comprendre le post. Si tu vois ce que je veux dire`
        },
        {
            id: 4,
            image: `${baseUrl}4.jpeg`,
            title: "Titre du Post",
            text: `Un descriptif du post. Un texte bien developpé qui permet à chacun de lire et comprendre le post. Si tu vois ce que je veux dire`
        }
    ]

    
  return (
      <div className="pubContainer" id='publications'>
        <Carousel >
            {datas.map(slide => (
                <div key={slide.id}>
                    <img src={slide.image} alt="" />
                    <div className="overlay">
                        <h2 className="overlay_title">{slide.title}</h2>
                        <p className="overlay_text">{slide.text}</p>
                    </div>
                </div>
            ))}
        </Carousel> 
    </div> 
    )
}


export default Slider;