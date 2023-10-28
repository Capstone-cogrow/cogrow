import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 200px;
  border-radius: 13px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #fff;
`;

export const Thumbnail = styled.img`
  height: 200px;
  border-radius: 10px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

export const Title = styled.div`
  ${FONT_STYLE.SB}
  font-size: 14px;
  word-break: keep-all;
  text-align: left;
  line-height: 1.625em;
  margin-top: 0px;
  padding: 0 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const SubTitle = styled.div`
  ${FONT_STYLE.M}
  font-size: 11px;
  padding: 15px 8px 5px 8px;
  text-align: left;
`;