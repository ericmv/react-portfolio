import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
    flex: 1;
    list-style-type: none;
`
const Item = styled.li`
    line-height: 1.7;
    font-weight: ${props => props.category ? "700": "400"};
    font-size: ${props => props.category ? "16px" : "14px"};
`

const SkillsColumn = (props) => {
    const category = props.category;
    const skillsArray = props.skills;


    return (
        <List>
            <Item category="true">{category}</Item>
            {skillsArray.map((skill) => {
                return (
                    <Item>{skill}</Item>
                )
            })}
        </List>
    )


    
}


export default SkillsColumn;