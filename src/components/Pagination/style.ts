import styled from "styled-components";
import { FONT_STYLE } from "../../styles/font";

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  ${FONT_STYLE.SB}
  font-size: 14px;
  min-width: 28px;
  border-radius: 4px;
  color: #40B36E;
  background-color: #F0F5EB;
  padding: 8px;
  margin-top: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
