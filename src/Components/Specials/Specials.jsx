import React from "react";
import './Specials.css'
import specials_image from '../Assets/specials_image.png'

const Specials = ()  => {
    return(
        <div className="specials">
            <div className="specials-left">
            <img src={specials_image}alt=""/>

            </div>
            <div className="specials-right">
                <h1>Special</h1>
                <h1>Offers For You</h1>
                <p>MOST POPULAR</p>
                <button>Check now</button>
            </div>
        </div>
    )
}
export default Specials