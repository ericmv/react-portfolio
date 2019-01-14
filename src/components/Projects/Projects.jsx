import React from 'react';
import styled from 'styled-components';

import { projectDetails } from '../../data/details';
import ProjectInfo from './ProjectInfo/Project';

const ProjectList = styled.div`
`


const Projects = () => {
    const projects = projectDetails;
    
    return (
        <ProjectList>
            {
                projects.map((project) => {
                    return (
                        <Project {...project}/>
                    )
                })
            }
        </ProjectList>
        
    )
}

export default Projects;