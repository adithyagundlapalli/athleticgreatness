import React from 'react'
import './services.scss'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className="services">
        <div className="service-container">
            <div className="heading">
                <h1 className="heading-title"><span>Why</span> Choose Us</h1>
                <p className="heading-description">Gym workouts offer a versatile and customisable experience, allowing <br /> everyone to set specific fitness goals.</p>
            </div>
            <div className="service-content">
                <div className="service-card">
                    <div className="number">01</div>
                    <div className="content">
                        <h1 className="service-card-title">Personal Training</h1>
                        <p className="service-card-description">Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="number">02</div>
                    <div className="content">
                        <h1 className="service-card-title">Equipment and facilities</h1>
                        <p className="service-card-description">Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="number">03</div>
                    <div className="content">
                        <h1 className="service-card-title">Nutrition Counseling</h1>
                        <p className="service-card-description">Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="number">04</div>
                    <div className="content">
                        <h1 className="service-card-title">Speciality Programs</h1>
                        <p className="service-card-description">Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services