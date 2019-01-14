import React from 'react';
import styled from 'styled-components';


const Tag = styled.div`
    background-color: #778beb;
    padding: 1px 5px;
    border-radius: 10%;
    color: white;
    font-size: 12px;
    font-weight: 700;
`

const TagList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const ProjectTags = (props) => {
    return (
        <TagList>
            {
                props.tags.map((tag) => {
                    return (
                        <Tag>{tag}</Tag>
                    )
                })
            }
        </TagList>
    )
}

export default ProjectTags;