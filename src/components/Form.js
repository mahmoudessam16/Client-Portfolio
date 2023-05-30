import "./FormStyle.css"


import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text" placeholder="Your Name"></input>
                <label>Email</label>
                <input type="email" placeholder="Your Email"></input>
                <label>Subject</label>
                <input type="text" placeholder="Subject"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type Your Message Here"></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form

