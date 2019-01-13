import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
    display: flex;
    align-self: start;
    border-radius: 15%;
    width: 100%;
    height: 100%;
`

const CompanyImage = (props) => {
    
    return (
        <Image src={props.source}>
        </Image>
    )
}

export default CompanyImage;