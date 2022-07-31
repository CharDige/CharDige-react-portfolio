import React from 'react';
import '../styles/Featureimage.css';
import headerImage from '../assets/header-image.jpg'

function Featureimage() {
    return (
        <figure>
            <img src={headerImage} alt="Colourful umbrellas" id="hero" />
        </figure>
    )
}

export default Featureimage;