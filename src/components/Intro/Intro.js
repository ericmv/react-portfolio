import React from 'react';
import styled from 'styled-components';

import ResumeButton from './ResumeButton/ResumeButton'


// Change to fit mobile-first
const IntroText = styled.div`
    line-height: 1.4;
    font-size: 24px;

    @media (min-width: 320px)  {
        font-size: 28px;
    }
    @media (min-width: 480px)  {
        font-size: 31px;
    }
    @media (min-width: 635px)  {
        font-size: 35px;
    }
    @media (min-width: 768px)  {
        font-size: 36px;
    }
    @media (min-width: 1024px) {
        padding-left: 15%;
    }
`

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0% 7%;
    height: 100vh;

    @media (min-width: 635px)  {
        width: 500px;
    }
    @media (min-width: 768px)  {
        width: 600px;
    }
    @media (min-width: 1025px)  {
        
        width: 700px;
    }
`

const Intro = () => {
    return (
        <IntroContainer>
            <IntroText>
                Hello!
            </IntroText>
            <IntroText>
                I'm Eric Vu, a forward-thinking software engineer who is passionate about creating complete and efficient products.
            </IntroText>
            <ResumeButton />
        </IntroContainer>
        
    )
}

export default Intro;