import React from 'react';
import styled from 'styled-components';


const Button = styled.a`
    border-radius: 5px;
    border: 2px solid #778beb;
    font-size: 18px;
    height: 60px;
    font-weight: bold;
    width: 200px;
    background-color: white;
    color: #778beb;
    justify-content: center;
    text-decoration: none;

    outline: none;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #778beb;
        color: white;
        cursor: pointer;
        text-decoration: none;
    }
` 

const ButtonWrapper = styled.div`
    @media (min-width: 1024px)  {
        padding-left: 15%;
    }

    
`

const ResumeButton = () => {
    return (
        <ButtonWrapper>
            <Button>
                Download Resume
            </Button>
        </ButtonWrapper>
        
    )
}

export default ResumeButton;