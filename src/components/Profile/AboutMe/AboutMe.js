import React from 'react';
import './AboutMe.css';

const aboutMe = props => (
    <div className='AboutMe'>
        <h3>About Me</h3>
        <p>{props.content}</p>
    </div>
);

export default aboutMe;