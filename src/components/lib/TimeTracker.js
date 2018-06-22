import styled, {keyframes, injectGlobal} from "styled-components";
import {gradientRedTop, gradientRedLeft, gradientGreyLeft, falseGradientGreyLeft,red, black, blue, darkWhite, lightGrey} from "./Colors";
import { FlexRow, MenuIcon } from "./Base"

export const TrackerWrapper = FlexRow.extend`
  postition: absolute;
  right: 0;
  height: 80px;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.1), 0 -1px 0 rgba(0,0,0,.02);
  align-items: center;
  padding-left: 80px;
  padding-right: 40px;

  > h5{
    margin: 0;
  }
`;

export const ButtonWrapper = FlexRow.extend`
  width: 100px;
  justify-content: center;
  align-items: center;
`;

export const TimerWrapper = ButtonWrapper.extend`
  width: 100px;
  justify-content: center;
  align-items: center;
`;

export const TimerButton = styled.div`
align-self: center;
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
background: ${gradientRedTop};
border-radius: 50%;
color: white;
height: 40px;
width: 40px;
 margin: 0 auto;
cursor: pointer;
`;

export const TimerInput = styled.input`
  align-self: center;
  border: none;
  border-bottom: 2px solid ${lightGrey};
  padding:5px;
  width: 100%;
  height: 60px;
  font-size:20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  &:focus{
    outline: 0;
  }
`;