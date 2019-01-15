import React from 'react';

import { SectionContainer, SectionHeader, SectionDetails } from '../../styles/styles';

import {experienceDetails} from '../../data/details'
import ExperienceList from './ExperienceList/ExperienceList'

const Experience = () => {
    return (
        <SectionContainer>
            <SectionHeader>Experience</SectionHeader>
            <SectionDetails>
                <ExperienceList details={experienceDetails}/>
            </SectionDetails>
        
        </SectionContainer>
    )
}

export default Experience;