import React from 'react';
import styled from 'styled-components';


const Image = styled.img`

`

const ProjectImage = (props) => {
    
    return (
        <Image src={props.source}>
        </Image>
    )
}

export default ProjectImage;