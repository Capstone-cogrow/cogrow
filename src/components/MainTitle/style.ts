import styled from "styled-components";
import { FONT_STYLE } from "../../styles/font";


export const MainTitleContainer = styled.div`
display: flex;
  justify-content: center;
  padding: 60px 0px 50px 0;
  width: 100%;
`;

export const H1Title = styled.h1`
${FONT_STYLE.SB}
  font-size: 22px;
  padding: 0 120px 30px 120px;
  border-bottom: 2.3px solid #E6E6E6;
  color: #2C2C2C;
`;