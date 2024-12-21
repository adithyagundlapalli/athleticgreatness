import React from 'react'
import './about.scss'
import aboutImage from '../../assets/about.jpg'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="about">
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-content-title1">We have a lot of</h1>
                <h1 className="about-content-title2">Experience</h1>
                <p className="about-content-description">In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at lacus consequat justo odio condimentum dui. Faucibus id blandit feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut facilisi vel. <br /><br /> Sem consequat fermentum pellentesque risus purus quis gravida. Nulla porttitor ultrices facilisis non commodo diam morbi cursus eu. Semper ut in mauris gravida id cursus urna. Magnis vulputate orci risus felis eget lectus morbi. Et cursus mauris condimentum pretium arcu sed dignissim.</p>
                <button className="about-content-button">About Us</button>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt="" className='image'/>
                <div className="blue-box"></div>
                <div className="white-box"></div>
            </div>
        </div>
    </div>
  )
}

export default About