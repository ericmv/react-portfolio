import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
    flex: 1;
    list-style-type: none;
    /* border: 1px dashed; */
    padding: 0;
`
const Item = styled.li`
    line-height: 1.7;
    font-weight: ${props => props.category ? "700": "300"};
    font-size: ${props => props.category ? "18px" : "16px"};
    
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