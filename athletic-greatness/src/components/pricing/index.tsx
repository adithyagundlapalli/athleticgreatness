import React from 'react';
import './pricing.scss';

const Pricing: React.FC = () => {
    return (
        <div className="pricing">
            <h1 className="header">HERE IS OUR PRICING</h1>
            <p className="description">Gym workouts offer customizable experiences and fitness goals.</p>
            <div className="pricing-cards">
                <div className="pricing-card">
                <h2 className="card-title">GROUP TRAINING</h2>
                    <div className="card-price">$100/MONTH</div>
                    <div className="includes">INCLUDES:</div>
                    <div className='content'>loremipsuloremipsum</div>
                    <div className='content'>loremipsuloremipsum</div>
                    <div className="benefits">BENEFITS:</div>
                    <div className='content'>loremipsuloremipsum</div>
                    <div className='content'>loremipsuloremipsum</div>
                    <div className="free-session">FIRST SESSION IS FREE!</div>
                    <button className="choose-button">Choose</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">GROUP TRAINING</h2>
                    <div className="card-price">$100/MONTH</div>
                    <div className="includes">INCLUDES:</div>
                    <div className='content'>loremipsuloremipsum</div>
                    <div className='content'>loremipsuloremipsum</div>
                    <div className="benefits">BENEFITS:</div>
                    <div className='content'>loremipsuloremipsum</div>
                    <div className='content'>loremipsuloremipsum</div>
                    <div className="free-session">FIRST SESSION IS FREE!</div>
                    <button className="choose-button">Choose</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;