import React from 'react';
import styled from 'styled-components';

import ProjectImage from './ProjectImage/ProjectImage';
import ProjectTags from './ProjectTags/ProjectTags';

// possibly reuse from experience section?
const ProjectName = styled.div`
    font-size: 22px;
    padding-bottom: 10px;
`

const ProjectDescription = styled.div`
    padding-bottom: 15px;
`

const Project = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20%;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 10%;
    }
`

const ProjectLink = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: #1B9CFC;
`

const ProjectDetails= styled.div`
    order: 1;
    flex: 2;

    @media (min-width: 768px) {
        margin-left: 7%;
    }
    
`

const ProjectInfo = (props) => {
    const projectName = props.name;
    const projectDescription = props.description;
    const projectTags = props.tags;
    const projectLink = props.link
    const imageUrl = props.image;

    return (
        <Project key={projectName}>
            <ProjectImage source={imageUrl} />
            <ProjectDetails index={props.index}>
                <ProjectName>{projectName}</ProjectName>
                <ProjectDescription>{projectDescription}</ProjectDescription>
                <ProjectTags tags={projectTags}/>
                <ProjectLink href={projectLink} target="_blank">Go to project >></ProjectLink>
            </ProjectDetails>

        </Project>
        
    )
}

export default ProjectInfo;