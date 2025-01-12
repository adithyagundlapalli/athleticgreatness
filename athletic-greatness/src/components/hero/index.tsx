import React from 'react';
import './hero.scss';
import heroImage from '../../assets/background.jpg';

interface Props {
}

const Hero: React.FC<Props> = (props) => {

    return (
        <div className="hero">
            <hr className='line'/>
            <div className="hero-container">
                <div className="hero-image">
                    <div className="gradient"></div>
                    <img src={heroImage} alt="Hero Background Image" className='background'/>
                </div>
                <div className="hero-content">
                    <h1 className="hero-content-title">ATHLETIC GREATNESS</h1>
                    <p className="hero-content-subtitle">Empowering athletes to reach peak potential.</p>
                    <button className="hero-content-button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;