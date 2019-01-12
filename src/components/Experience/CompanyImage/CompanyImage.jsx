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
    console.log(props.source)
    const imageUrl = '../../../data/images/' + props.source
    return (
        <Image src={imageUrl}>
        </Image>
    )
}

export default CompanyImage;