import React, {Component} from 'react';
import AuxComp from '../../hoc/AuxComp/AuxComp';
import './Projects.css';
import Project from '../../components/Project/Project';

class Projects extends Component {

    state = {
        projects: [
            {title: 'Test', image: 'test.png', description: `Hello world this is my project`}
        ]
    }

    
    render() {
        const projects = this.state.projects.map( ele => {
            return <Project 
                    title={ele.title} 
                    image={ele.title} 
                    description={ele.description} 
                    link={'www.github.com'}/>
        });
        return(
            <AuxComp>
                <h1>Projects</h1>
                {projects}
            </AuxComp>
        );
    }
}

export default Projects;