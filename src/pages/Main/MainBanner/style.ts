import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";

interface MobileCapabilities {
  isMobile: boolean;
}

export const Section = styled.div<MobileCapabilities>`
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.isMobile ? "34px 0 0px 0" : "137px 0px 0 0")};
  width: 100%;
  box-sizing: border-box;
  background-color: #f9fafb;
  
`;

export const Container = styled.div<MobileCapabilities>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.isMobile ? "40px" : "30px")};
  user-select: none;
  pointer-events: none;
`;

export const BannerImage = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 410px;
  margin-top: -180px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

interface TitleProps {
  align: string;
}

export const Title = styled.div<TitleProps>`
  ${FONT_STYLE.SB}
  font-size: 26px;
  line-height: 1.5em;
  word-break: keep-all;
  text-align: ${(props) => props.align};
`;

interface SummaryProps {
  align: string;
}

export const Summary = styled.div<SummaryProps>`
  ${FONT_STYLE.M}
  white-space: pre-wrap;
  font-size: 14px;
  margin-top: 10px;
  line-height: 2em;
  word-break: keep-all;
  text-align: ${(props) => props.align};
`;

export const ButtonContainer  = styled.div`
  margin-top: 30px;
  float: left;

  @media screen and (max-width: 768px) {
    margin: 30px auto;
    align-items: center;
  }
`;

export const Button1  = styled.button`
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
  padding: 10px 25px;
`;

export const Button2  = styled.button`
  margin-left: 10px;
  background-color: #F5FAF2;
  border-radius : 10px;
  box-shadow: 3px 3px 3px -1px #E6E6E6;
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #40B36E;
  ${FONT_STYLE.SB}
  font-size: 14px;
  padding: 10px 25px;
`;

