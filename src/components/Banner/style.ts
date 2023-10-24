import styled from "styled-components";
import { FONT_STYLE } from "../../styles/font";

interface MobileCapabilities {
  isMobile: boolean;
}

export const Section = styled.div<MobileCapabilities>`
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.isMobile ? "64px 32px" : "70px 40px")};
  width: 100%;
  box-sizing: border-box;
  background-color: #F9F9F9;
`;

export const Container = styled.div<MobileCapabilities>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.isMobile ? "64px" : "180px")};
  user-select: none;
  pointer-events: none;
`;

export const BannerImage = styled.img`
  border-radius: 10%;
  box-shadow: 15px 15px 15px -5px #DBDBDB;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};

  @media screen and (max-width: ${(props) => props.width}px) {
    width: 100%;
  }
`;

export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 390px;
`;

interface TitleProps {
  align: string;
}

export const Title = styled.div<TitleProps>`
  ${FONT_STYLE.SB}
  font-size: 28px;
  line-height: 1.5em;
  word-break: keep-all;
  text-align: ${(props) => props.align};
`;

interface SummaryProps {
  align: string;
}

export const Summary = styled.div<SummaryProps>`
  ${FONT_STYLE.SB}
  font-size: 14px;
  color: #40B36E;
  margin-bottom: 10px;
  line-height: 2em;
  word-break: keep-all;
  text-align: ${(props) => props.align};
`;

interface ExplainProps {
  align: string;
}

export const Explain = styled.div<ExplainProps>`
  margin-top: 20px;
  width: 270px;
  ${FONT_STYLE.M}
  font-size: 18px;
  color: #727272;
  line-height: 1.6em;
  word-break: keep-all;
  text-align: ${(props) => props.align};

  @media screen and (max-width: 768px) {
    margin-left: 28px;
  }
`;
