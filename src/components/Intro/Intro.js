import React, { Component } from 'react';
import styled from 'styled-components';

import ResumeButton from './ResumeButton/ResumeButton'


// Change to fit mobile-first
const IntroText = styled.div`
    color: #485460;
    line-height: 1.4;
    font-size: 24px;
`
const Spacer = styled.br`
    line-height: 2.5;
`

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0% 7%;
    height: 100vh;
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