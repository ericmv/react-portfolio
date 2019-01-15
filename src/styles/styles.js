import styled from 'styled-components';


export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    padding: 5% 8%;

    @media (min-width: 1025px) {
        flex-direction: row;
        /* padding: 5% 13% 0 10%; */
        justify-content: space-around;
    }
`

export const SectionHeader = styled.div`
    font-size: 26px;
    padding-bottom: 10px;
    text-align: left;
    flex: 1;
    color: #1B9CFC;

    @media (min-width: 1025px) {
        text-align: right;
    }
`

export const SectionDetails = styled.div`
    flex: 5;
    text-align: left;
    line-height: 1.6;

    @media (min-width: 1025px) {
        padding-left: 75px;
    }
`