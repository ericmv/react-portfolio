import React from 'react';
import styled from 'styled-components';


const Tag = styled.div`
    background-color: #778beb;
    padding: 1px 5px;
    border-radius: 10%;
    color: white;
    font-size: 12px;
    font-weight: 700;
    margin-right: 5px;
    margin-bottom: 5px;
`

const TagList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 15px;
`

const ProjectTags = (props) => {
    return (
        <TagList>
            {
                props.tags.map((tag) => {
                    return (
                        <Tag key={tag}>{tag}</Tag>
                    )
                })
            }
        </TagList>
    )
}

export default ProjectTags;