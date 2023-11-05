import styled from "styled-components";
import { FONT_STYLE } from "../../styles/font";


export const ResultSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;
  padding-bottom: 55px;  
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-top: -50px;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 470px;
  margin-bottom: 10px;
`;

export const RightContainer = styled.div`
width: 390px;
`;


export const Title = styled.p`
${FONT_STYLE.SB}
margin-bottom: 30px;
font-size: 16px;
`;

export const Span = styled.span`
${FONT_STYLE.SB}
font-size: 20px;
`;

export const Content = styled.p`
${FONT_STYLE.L}
letter-spacing: 0.05em;
line-height: 1.3em;
margin-bottom: 20px;
font-size: 14px;
`;

export const ButtonContainer = styled.div`
`;

export const Button = styled.button`
  //margin-top: 20px;
  background-color: #F4FAED;
  border-radius : 20px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #000;
  ${FONT_STYLE.M}
  font-size: 13px;
  padding: 10px 30px;
  margin: 20px 00px 0 50px;
`;