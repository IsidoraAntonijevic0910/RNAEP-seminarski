import React from "react";
import './NewsLetter.css'
const NewsLetter = ()  => {
    return(
        <div className="newsletter">
            <h1>Get Exclusive Content in Your Email</h1>
            <p>Sign up for our newsletter to stay informed</p>
            <div>
                <input type ="email" placeholder="Your Email Id"/>
                <button>Subscribe</button>
            </div>
            

        </div>
    )
}
export default NewsLetter