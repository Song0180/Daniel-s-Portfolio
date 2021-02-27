import React from 'react';
import '../../App.css';
import Button from '../Button/Button';
import './Hero.css';


function Hero() {
    return (
        <div className="hero-container">
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
            <h1>Welcome to my personal website</h1>
            <p>Undergradate Student at NTU</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    path="/linkedin"
                >
                    Connect with me on LinkedIn
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    path="/about"
                >
                    About me
                </Button>
            </div>
        </div>
    )
}

export default Hero;
