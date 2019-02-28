import React from 'react';
import './Project.css';

const project = props => (
    <div className='Project'>
        <h4>{props.title}</h4>
        <img src={props.image}/>
        <p>{props.description}</p>
    </div>
);

export default project;