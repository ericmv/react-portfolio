import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
    display: flex;
    align-self: start;
    border-radius: 15%;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;

    @media (min-width: 635px) {
        /* align-self: flex-start; */
        margin-right: 5%;
        width: 206px;
        height: 187px;
    }

    @media (min-width: 768px) {
        height: 250px;
        width: 275px;
    }
`

const CompanyImage = (props) => {
    
    return (
        <Image src={props.source}>
        </Image>
    )
}

export default CompanyImage;