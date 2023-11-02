import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 180px;
  border-radius: 30px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #40B36E;
`;

export const Thumbnail = styled.img`
  height: 180px;
  border-radius: 27px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background-color: #fff;
`;

export const Title = styled.div`
  ${FONT_STYLE.SB}
  font-size: 17.5px;
  color: #fff;
  word-break: keep-all;
  text-align: center;
  line-height: 1.625em;
  margin-top: 15px;
  padding: 0 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const SubTitle = styled.div`
  ${FONT_STYLE.M}
  font-size: 12px;
  padding: 5px 8px;
  color: #fff;
  text-align: center;
`;