import React from 'react';
import styled from 'styled-components';

import SkillsColumn from '../SkillsColumn/SkillsColumn';

const Row = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const SkillsRow = (props) => { 
    return (
        <Row>
            {props.lists.map((item) => {
                return (
                    <SkillsColumn category={item.category} skills={item.skills}/>
                )
            })}
        </Row>
    )
    
}

export default SkillsRow;