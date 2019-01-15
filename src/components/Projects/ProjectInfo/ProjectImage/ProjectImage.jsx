import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
`

const ImageWrapper = styled.div`
    display: flex;
    flex: 3;
    align-self: center;
`

const ProjectImage = (props) => {
    
    return (
        <ImageWrapper>
            <Image src={props.source}>
            </Image>
        </ImageWrapper>
        
    )
}

export default ProjectImage;