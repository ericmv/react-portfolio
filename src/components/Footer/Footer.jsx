import React from 'react';
import styled from 'styled-components';

import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa" 

const StyledFooter = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #1B9CFC;
    padding: 2% 3%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledIcons = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledIcon = styled.div`
    color: #1B9CFC;
    padding: 0px 10px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledIcons>
                <StyledIcon href="mailto:ericmvu@gmail.com"><FaRegEnvelope size={30} color="#1B9CFC" /></StyledIcon>
                <StyledIcon href="https://www.github.com/ericmv"><FaGithub size={30} color="#1B9CFC" /></StyledIcon>
                <StyledIcon href="https://www.linkedin.com/in/eric-m-vu/"><FaLinkedin size={30} color="#1B9CFC" /></StyledIcon>
            </StyledIcons>
            <div>Developed by Eric Vu 2018</div>
        </StyledFooter>
    )
} 

export default Footer;