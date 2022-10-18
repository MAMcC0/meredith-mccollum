import React from 'react';
import Icon from '../photos/download-icon-brown.png'
import '../css/Resume.css'


export default function Resume() {
    return (
        <div id="resume-container">
            <div id="skills">
                <p>MERN Stack, RESTful API,</p>
                <p>SQL, Sequelize</p>
                <p>Javascript, Python</p>
            </div>
            <div>
                <h3>Resume<a href={require('../photos/Meredith McCollum Resume.pdf')} download><img src={Icon}/></a></h3>

            </div>
        </div>
    )
}