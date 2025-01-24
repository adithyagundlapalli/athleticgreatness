import React from 'react'
import './contact.scss'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import trapezoid from '../../assets/trapezoid.png'



type Props = {}

const Contact = (props: Props) => {
  return (
    <div className="contact">

        <div className="contact-section">
            <div className="contact-info">
                <h2 className="contact-header">CONTACT US</h2>
                <div className="contact-details">
                    <div className="contact-item" aria-label="Phone number">
                        <FaPhone className="contact-icon" />
                        <span>209-597-3680</span>
                    </div>
                    <div className="contact-item" aria-label="Email address">
                        <FaEnvelope className="contact-icon" />
                        <span>coachadithya1@gmail.com</span>
                    </div>
                    <div className="contact-item" aria-label="Location">
                        <FaMapMarkerAlt className="contact-icon" />
                        <span>Mountain House, CA</span>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <h2 className="form-header">LET'S START VOLLEYBALL <br /><span className="highlight">TRAINING NOW</span></h2>
                <form>
                    <input type="text" placeholder="Enter Your Name..." required aria-label="Your Name" />
                    <input type="tel" placeholder="Enter Your Phone Number..." required aria-label="Your Phone Number" />
                    <input type="email" placeholder="Enter Your Email Address..." required aria-label="Your Email" />
                    <textarea placeholder="Enter Your Message..." required aria-label="Your Message"></textarea>
                    <button type="submit" className="send-button">SEND</button>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Contact