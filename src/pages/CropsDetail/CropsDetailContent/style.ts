import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding-bottom: 50px;  
`;

export const WrapContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: center; 
  background-color: #FBFBFB;
  padding: 25px 0 50px 0;  
  border-radius : 17px;
  margin-bottom: 20px;
  border: 1px solid #DEDEDE;
`;


export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;

export const RightContainer = styled.div`
`;

export const CropImage = styled.img`
  border-radius: 10px;
  width: 250px;
  margin-bottom: 10px;
`;

export const CropTitleButton = styled.button`
  //margin-top: 20px;
  background-color: #40B36E;
  border-radius : 10px;
  box-shadow: 3px 3px 3px -1px #DBDBDB;
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  ${FONT_STYLE.SB}
  font-size: 14px;
  padding: 10px 10px;
  width: 70%;
`;


export const UL = styled.ul`
clear: both;
padding: 35px 0;
border-bottom: 2px solid #DEDEDE;
`;

export const LITitle = styled.li`
float: left;
${FONT_STYLE.SB};
font-size: 17px;
width: 120px;
`;

export const LISubTitle = styled.li`
float: left;
${FONT_STYLE.M};
`;