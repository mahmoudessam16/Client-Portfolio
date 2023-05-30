import "./WordCardStyle.css"
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="project1"/>
        </div>
    )
}

export default WorkCard
