import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import './Home.css';
import AuxComp from '../../hoc/AuxComp/AuxComp';
import Profile from '../../components/Profile/Profile';
import AboutMe from '../../components/Profile/AboutMe/AboutMe';

class Home extends Component {

    state = {
        resumeLink: '',
        aboutText: `Howdy my name is Larry Cherry. 
        I spend my time between teaching coding
        fundamentals with codewizards and help with developing
        curriculum. In my spare time I enjoy 3D Printing, working
        through Udemy courses, and spending time with family. If my
        skills can be of use to you do not hesitate to contact. I
        always enjoy a conversation especially when it involves code.`
    }

    render() {
        return (
            <AuxComp>
                <Profile/>
                <AboutMe 
                    content={this.state.aboutText}/>
            </AuxComp>
        );
    };
};

export default Home;
