import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";
import FirstImage from "../../../assets/images/mypage1.png";
import SecondImage from "../../../assets/images/mypage2.png";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;

  @media screen and (max-width: 768px) {
    display:flex;
    flex-direction: row;
  }
`;

export const CropsSection = styled.div`
  width: 770px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
  justify-content: center;
  align-items: center;
  }
`;

export const CropsContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const CropsImg = styled.div`
  width: 100%;
  vertical-align: middle;
`;

export const CropsText = styled.div`
  position: absolute;
  text-align: left;
  top: 18%;
  left: 50%;
  width: 85%;
  transform: translate(-50%, -50%);
`;

export const CropsTitle = styled.h3`
  color: #fff;
  ${FONT_STYLE.SB};
  font-size: 22px;
  line-height: 2.3em;
`;

export const CropsSubTitle = styled.p`
  color: #fff;
  ${FONT_STYLE.M};
  font-size: 13.5px;
`;

export const FirstImg = styled.img.attrs({
    src: `${FirstImage}`,
  })`
    width: 350px;
    border-radius: 7%;
    box-shadow: 5px 5px 5px -3px #B0B0B0;
  `;

export const SecondImg = styled.img.attrs({
    src: `${SecondImage}`,
  })`
    width: 350px;
    border-radius: 7%;
    box-shadow: 5px 5px 5px -3px #B0B0B0;
  `;