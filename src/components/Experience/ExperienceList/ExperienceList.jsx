import React from 'react';
import styled from 'styled-components';


import CompanyImage from '../CompanyImage/CompanyImage';
import ExperienceDetails from '../Description/Description';

const StyledExperience = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /* border: 1px solid; */
    @media (min-width: 635px) {
        flex-direction: row;
        padding-right: 10%;
    }
`

const ExperienceList = (props) => {
    const experience = props.details
    return (
        experience.map((item) => {
        const {imageUrl, ...details} = item
        return (
            <StyledExperience key={item.companyName}>
                <CompanyImage source={imageUrl}/>
                <ExperienceDetails {...details} />
            </StyledExperience>
        ) 
    })
)
}

export default ExperienceList;