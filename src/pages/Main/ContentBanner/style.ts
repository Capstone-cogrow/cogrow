import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";

export const HeadContainer  = styled.div`
  width: 100%;
  text-align: center;
  padding: 130px 0;
  border-bottom: 1px solid #EEEEEE;
  border-top: 1px solid #EEEEEE;
`;


export const HeadTitle  = styled.h2`
  //margin-top: 20px;
  color: black;
  ${FONT_STYLE.SB}
  font-size: 22px;
  padding: 8px 25px;
`;
