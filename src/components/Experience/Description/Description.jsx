import React from 'react';
import styled from 'styled-components';


const Description = styled.div`
    padding: 0% 0 5% 0;
    line-height: 1.5;
`

const CompanyName = styled.div`
    color: #0984e3;
    line-height: 1;
    font-size: 20px;
    padding-bottom: 10px;
`

const Position = styled.div`
    color: #6ab04c;
    line-height: 1;
    font-weight: bold;
    padding-bottom: 10px;
    font-size: 16px;
`
const Location = styled.div`
    font-weight: 700;
    padding-bottom: 10px;
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