import React from "react";
import './Hero.css';
import clothing_icon from '../Assets/clothing_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = ()  => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>Latest collection</h2>
                <div>
                    <div className="hero-clothing-icon">
                        <p>NEW</p>
                        <img src={clothing_icon}alt=""/>
                    </div>
                    <p>COLLECTION</p>
                    <p>FOR EVERYONE</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest collection</div>
                    <img src={arrow_icon}alt =""/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt=""/>

            </div>  
        </div>
    )
}
export default Hero