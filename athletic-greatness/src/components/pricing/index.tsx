import React from 'react';
import './pricing.scss';

const Pricing: React.FC = () => {
    return (
        <div className="pricing">
            <h1 className="header">Here is our Pricing</h1>
            <p className="description">Choose the best plan that suits your needs.</p>
            <div className="pricing-cards">
                <div className="pricing-card">
                    <h2 className="card-title">Group Training</h2>
                    <div className="card-price">$100/Month</div>
                    <div className="includes">Includes:<br /> loremipsuloremipsum</div>
                    <div className="benefits">Benefits:<br /> loremipsuloremipsum</div>
                    <div className="free-session">FIRST SESSION IS FREE!</div>
                    <button className="choose-button">Choose</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Group Training</h2>
                    <div className="card-price">$100/Month</div>
                    <div className="includes">Includes:<br /> loremipsuloremipsum</div>
                    <div className="benefits">Benefits:<br /> loremipsuloremipsum</div>
                    <div className="free-session">FIRST SESSION IS FREE!</div>
                    <button className="choose-button">Choose</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;