import styled, {css} from "styled-components";
import {Card, CardContent} from "@material-ui/core";

export const CustomCard = styled(Card)`
    width: 80vw;
    margin-top: 20px;
    &:hover{
      ${props => props.theme==='light' && css`
    `}
    ${props => props.theme==='dark' && css`
  background-color: darken(#424242, 20%);

    `}    
    }
`;
export const PlaySeparator = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TypoIconContainer = styled.div`
  display:flex
`;
export const CustomCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;
export const InfoQuickTrain = styled.div`
  margin-top: 15px;
  display: flex;
  align-content: center;
  & p {
  margin-right: 10px;
  }
`;
export const InfoIconTypo = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
