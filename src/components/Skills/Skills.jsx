import React from 'react';
import styled from 'styled-components';

import SkillsRow from './SkillsRow/SkillsRow';
import { SectionContainer, SectionHeader, SectionDetails } from '../../styles/styles';


import { skillsDetails } from '../../data/details';


const SkillsTable = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* border: 1px solid; */
`

const Skills = (props) => {
    const firstSet = skillsDetails.slice(0, 2);
    const secondSet = skillsDetails.slice(2);

    return (
        <SectionContainer>
            <SectionHeader>Skills</SectionHeader>
            <SectionDetails>
                <SkillsTable>
                    <SkillsRow lists={firstSet} />
                    <SkillsRow lists={secondSet} />
                </SkillsTable>
            </SectionDetails>
        </SectionContainer>
        
    )
}

export default Skills;