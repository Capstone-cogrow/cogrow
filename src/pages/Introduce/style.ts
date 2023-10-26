import styled from "styled-components";
import { FONT_STYLE } from "../../styles/font";
import IntroImage from "../../assets/images/intro2.jpg";
import IntroLogoImage from "../../assets/logo_img/logo_web.ver.png";


export const ImageSection = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  vertical-align: middle;
`;

export const IntroImg = styled.img.attrs({
    src: `${IntroImage}`,
  })`
    width: 100%;
    margin: 0px 0 0 0px;
    opacity: 0.77;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

export const IntroText = styled.p`
    font-size: 35px;
    line-height: 1.5em;
    text-align: center;
    ${FONT_STYLE.SB};
    color: #fff;
  `;

export const IntroSection = styled.div`
  padding: 100px 0 130px 0;
  text-align: center;
`;

export const IntroLogoImg = styled.img.attrs({
    src: `${IntroLogoImage}`,
  })`
    width: 210px;
    margin: 0px 0 0 0px;
`;

export const IntroTitle = styled.p`
  ${FONT_STYLE.SB};
  font-size: 23px;
  margin:47px 0 30px 0;
`;

export const IntroSubTitle = styled.p`
  ${FONT_STYLE.M};
  font-size: 16px;
  line-height: 1.5em;
`;