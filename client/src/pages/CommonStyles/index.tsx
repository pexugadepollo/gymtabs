import styled, {css} from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;

export const MainContent = styled.div`
display: flex;
flex-direction: column;
  transition: background-color .5s ease-in-out;
  flex-grow: 2;
  align-items: center;
  ${props => props.theme==='light' && css`
  background-color: white;
    `}
    ${props => props.theme==='dark' && css`
    background-color: black;
    `}
`;
