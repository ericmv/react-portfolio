import React from 'react';
import styled from 'styled-components';

import CompanyImage from '../CompanyImage/CompanyImage';
import ExperienceDetails from '../Description/Description';


const ExperienceList = (props) => {
    const experience = props.details
    return (
        experience.map((item) => {
        const {imageUrl, ...details} = item
        return (
            <div>
                <CompanyImage source={imageUrl}/>
                <ExperienceDetails {...details} />
            </div>
        ) 
    })
)
}

export default ExperienceList;