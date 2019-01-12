import React from 'react';
import styled from 'styled-components';


const Description = styled.div`
    /* font-size: 14px; */
    line-height: 1.5;
`

const CompanyName = styled.div`
    color: #0984e3;
    line-height: 1.3;
    font-size: 24px;
`

const Position = styled.div`
    color: #6ab04c;
    line-height: 1;
    font-weight: bold;
`
const Location = styled.p`
    font-weight: 700;
`
const ExperienceDescription = (props) => {
    return (
        <Description>
            <CompanyName>{props.companyName}</CompanyName>
            <Position>{props.position}</Position>
            <Location>{props.location}</Location>
            {props.description}
        </Description>
    )
}

export default ExperienceDescription;