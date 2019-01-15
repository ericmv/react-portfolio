import React from 'react';
import styled from 'styled-components';

import SkillsColumn from '../SkillsColumn/SkillsColumn';

const Row = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* border: 1px dotted; */
`

const SkillsRow = (props) => { 
    return (
        <Row>
            {props.lists.map((item) => {
                return (
                    <SkillsColumn key={item.index} category={item.category} skills={item.skills}/>
                )
            })}
        </Row>
    )
    
}

export default SkillsRow;