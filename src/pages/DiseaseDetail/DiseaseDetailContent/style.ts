import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";
import DiseaseImage from "../../../assets/images/감자.jpg";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 0 280px 70px 280px;
  margin-top: -40px;
`;

export const ImageContainer = styled.div`
  border-radius: 13px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  width: 230px;
  height: 230px;
  margin-top: 25px;
`;

export const Image = styled.img.attrs({
  src: `${DiseaseImage}`,
})`
  border-radius: 10px;
  width: 100%;  
`;

export const DiseaseResultText = styled.p`
font-size: 19px;
${FONT_STYLE.L};
`;

export const Span = styled.span`
line-height: 1.5em;
font-size: 21px;
${FONT_STYLE.SB};
`;

export const DiseaseTitle = styled.p`
margin-top: 30px;
margin-bottom: 10px;
${FONT_STYLE.SB};
font-size: 17px;
text-align: left;
`;

export const DiseaseSubTitle = styled.p`
line-height: 1.5em;
${FONT_STYLE.L};
letter-spacing: 0.05em;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  margin-top: 30px;
  text-align: center;
`;

export const RightContainer = styled.div`
margin-top: 20px;
`;
