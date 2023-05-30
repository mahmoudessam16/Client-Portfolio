import "./HeroimgStyles.css";
import React from 'react'
import about from "../assets/Home.jpeg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={about} alt="intro"/>
        </div>
        <div className="content">
            <p>HI, I'M MENNA</p>
            <h1>Graphic Designer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg

