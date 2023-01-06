import styled from "styled-components";

export const ButtonStyle = styled.button `
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.primaryBackgroundButton};
    background-color: ${p => p.theme.colors.primaryBackgroundColor};
    
    display: flex;
    width: 395px;
    height: 58px;
    padding: 21px;
    margin: 15px auto;
    border: 1px solid;
    border-radius: 15px;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover, &:focus { 
        font-weight: ${p => p.theme.fontWeights.bold};
        color: ${p => p.theme.colors.primaryBackgroundColor};
        background-color: ${p => p.theme.colors.primaryBackgroundButton};
    }
`