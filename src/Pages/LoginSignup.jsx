import React from "react";
import './CSS/LoginSignup.css';
const LoginSignup = ()  => {
    return(
        <div className="loginsignup">
            <div className="loginsignuo-container">
                <h1>Sing up</h1>
                <div className="loginsignup-fields">
                    <input type ="text" placeholder="Your Name"/>
                    <input type ="email" placeholder="Email Addres"/>
                    <input type ="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span> Login here</span></p>
                <div className="loginsignup-agree">
                    <input type ="chechbox"name='' id=''/>
                    <p>By continuing with your purchase, you're agreeing to our terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup