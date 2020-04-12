import styled from 'styled-components';
/*
interface Props {
    dark: boolean;
}
*/


let surfaceColor = "#121212";
let primaryColor = "#ffffff";
export const Container = styled.div/*<Props>*/`
@media (min-width: 320px) and (max-width: 480px) {
margin: 0;
padding: 0;
}
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
@media (min-width: 320px) and (max-width: 480px) {
  margin: 0;
  padding-bottom: 0;
  width: 100vw;
  height: 90vh;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  & .MuiTextField-root{
      font-size: medium;
  }
  & button {
  margin-top: 10px;
  }
  & h1{
    font-weight: 400;
    font-size: medium;
  }
  & .logintxt{
    margin-bottom: 20px;
  }
}
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
@media (min-width: 320px) and (max-width: 480px) {
  flex-direction: column;
  justify-content: center;
  font-size: small;
  & button{
    font-size: small;
  }
}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & a{
    text-decoration: none;
    color: #3f51b5;
  }
`;

