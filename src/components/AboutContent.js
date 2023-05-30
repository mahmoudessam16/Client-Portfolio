import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import one from '../assets/graphic-1.jpg'
import two from '../assets/graphic-3.avif'
import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>
                    I'm a creative person driven by my passion for design.
                    I'm proficient with graphic tools and have
                    an artistic approach towards everything I create
                    Graphic designing makes my interest a profession 
                    and lets me create impressive designs that impact people.
                </p>
                <Link to="/contact" className="btn">CONTACT</Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={two} alt="react1" className="img"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={one} alt="react1" className="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent

