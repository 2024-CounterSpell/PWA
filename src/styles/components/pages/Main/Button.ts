import styled from "styled-components";
import { IButton } from "../../../../types/components";

export const ButtonContainer = styled.button<IButton>`
    width: ${(props) => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor || props.bgColor || 'inherit'};
    border-radius: ${props => props.borderRadius};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0px 15px;
    border: ${props => `3px solid ${props.color}`};
    font-weight: bold;  
`