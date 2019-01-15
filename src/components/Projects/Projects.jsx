import React from 'react';
import styled from 'styled-components';

import { projectDetails } from '../../data/details';
import ProjectInfo from './ProjectInfo/Project';

import { SectionContainer, SectionHeader, SectionDetails } from '../../styles/styles';

const ProjectList = styled.div`
`


const Projects = () => {
    const projects = projectDetails;
    
    return (
        <SectionContainer>
            <SectionHeader>Projects</SectionHeader>
            <SectionDetails>
                <ProjectList>
                {
                    projects.map((project) => {
                        return (
                            <ProjectInfo index={project.index} {...project}/>
                        )
                    })
                }
                </ProjectList>
            </SectionDetails>
        </SectionContainer>
    )
}

export default Projects;