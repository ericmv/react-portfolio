import React from 'react';
import styled from 'styled-components';

import ProjectImage from './ProjectImage/ProjectImage';
import ProjectTags from './ProjectTags/ProjectTags';

// possibly reuse from experience section?
const ProjectName = styled.div`
    font-size: 20px;
    padding-bottom: 10px;
`

const Project = styled.div`
    display: flex;
    flex-direction: column;
`

const ProjectInfo = (props) => {
    const projectName = props.name;
    const projectDescription = props.description;
    const projectTags = props.tags;
    const imageUrl = props.image;

    return (
        <Project>
            <ProjectImage source={imageUrl} />
            <ProjectName>{projectName}</ProjectName>
            <p>{projectDescription}</p>
            <ProjectTags tags={projectTags}/>
        </Project>
        
    )
}

export default ProjectInfo;