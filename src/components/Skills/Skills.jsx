import React from 'react';
import styled from 'styled-components';

import SkillsRow from './SkillsRow/SkillsRow';

import { skillsDetails } from '../../data/details';


const SkillsTable = styled.div`
    display: flex;
    flex-direction: column;
`

const Skills = (props) => {
    const firstSet = skillsDetails.slice(0, 2);
    const secondSet = skillsDetails.slice(2);

    return (
        <SkillsTable>
            <SkillsRow lists={firstSet} />
            <SkillsRow lists={secondSet} />
        </SkillsTable>
    )
}

export default Skills;