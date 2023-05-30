import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaBehance } from 'react-icons/fa'
import "./FooterStyle.css"

const Footer = () => {
    return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>El Mahalla El Kubra, Al Gharbiya</p>
                        <p>Egypt</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        01281232045
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <a href='mailto:mennak730@gmail.com' target='blank'>Mail Me</a>
                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p>This is me Menna Khaled, Graphic Designer. I develop the overall layout and production design for applications.
                And create visual concepts, using Photoshop And Illustrator, to communicate ideas that inspire, inform, and captivate consumers.
                </p>
                <div className='social'>
                    <a href='https://www.facebook.com/ousha.ousheen' target='blank'><FaFacebook size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                    <a href='https://www.behance.net/mennakhaled10' target='blank'><FaBehance size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                    <a href='https://www.linkedin.com/in/menna-khaled-056241247/'><FaLinkedin size={20} style={{color: "#fff", marginRight: "1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer
