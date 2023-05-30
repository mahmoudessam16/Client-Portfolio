import "./WordCardStyle.css"
import React from 'react'

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="project1"/>
        </div>
    )
}

export default WorkCard
