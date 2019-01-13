import React from 'react';
import styled from 'styled-components';

import {experienceDetails} from '../../data/details'
import ExperienceList from './ExperienceList/ExperienceList'

const Experience = () => {
    return (
        <div className="section">
            <div className="sectionHeader">Experience</div>
            <div className="sectionDetails">
                <ExperienceList details={experienceDetails}/>
            </div>
        
        </div>
    )
}

export default Experience;