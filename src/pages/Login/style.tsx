import styled from 'styled-components';
/*
interface Props {
    dark: boolean;
}
*/
let surfaceColor = "#121212";
let primaryColor = "#ffffff";
export const Container = styled.div/*<Props>*/`
  /*background-color: {({dark}) => dark ? 'white' : 'black'};*/
  display: flex;
  width: 100vw;
  height: 100vh;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: ${surfaceColor};
  
`;

export const LoginForm = styled.form`
  color: white;
  font-family: 'Roboto', sans-serif;
  background-color: ${primaryColor+"0d"};
  padding: 60px;
  width: 25vw;
  border-radius: 10px;
  text-align: center;
  & .MuiTextField-root{
    margin: 10px 0;
  }
  & h1{
    font-weight: 400;
  }
  & .logintxt{
    margin-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & a{
    text-decoration: none;
    color: #3f51b5;
  }
`;

