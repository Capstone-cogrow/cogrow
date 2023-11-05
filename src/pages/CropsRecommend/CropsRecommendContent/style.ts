import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";
import CropImage1 from "../../../assets/images/애플이.png";
import CropImage2 from "../../../assets/images/포포.png";
import CropImage3 from "../../../assets/images/상추.png";
import CropImage4 from "../../../assets/images/귤귤.png";
import CropImage5 from "../../../assets/images/콩.png";


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding-bottom: 50px;  
`;

export const WrapContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: center; 
  background-color: #FBFBFB;
  padding: 50px 0 50px 0;  
  border-radius : 17px;
  margin-bottom: 20px;
  border: 1px solid #DEDEDE;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  margin-top: 90px;
`;

export const Image1 = styled.img.attrs({
  src: `${CropImage1}`,
})`
  border-radius: 10px;
  width: 170px;
  margin-bottom: 10px;
`;

export const Image2 = styled.img.attrs({
  src: `${CropImage2}`,
})`
  border-radius: 10px;
  width: 170px;
  margin-bottom: 10px;
`;

export const Image3 = styled.img.attrs({
  src: `${CropImage3}`,
})`
  border-radius: 10px;
  width: 170px;
  margin-bottom: 10px;
`;

export const Image4 = styled.img.attrs({
  src: `${CropImage4}`,
})`
  border-radius: 10px;
  width: 170px;
  margin-bottom: 10px;
`;

export const Image5 = styled.img.attrs({
  src: `${CropImage5}`,
})`
  border-radius: 10px;
  width: 180px;
  margin-bottom: 10px;
`;

export const RightContainer = styled.div`
`;


export const Title = styled.p`
${FONT_STYLE.SB}
margin-bottom: 30px;
`;


export const CardContainer = styled.div`
padding: 50px 0px 30px;
border-radius: 13px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #40B36E;
`;

export const Question = styled.p`
color: #fff;
${FONT_STYLE.SB}
margin-bottom: 40px;
font-size: 17px;
`;

export const AnswerButton = styled.button`
  //margin-top: 20px;
  background-color: #fff;
  border-radius : 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #40B36E;
  ${FONT_STYLE.SB}
  font-size: 14px;
  padding: 10px 45px;
  margin-bottom: 20px;
`;

export const UL = styled.ul`
`;

export const LI = styled.li`
  float: left;
  margin: 0 10px;
`;

export const Button = styled.button`
  //margin-top: 20px;
  background-color: #40B36E;
  border-radius : 25px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  ${FONT_STYLE.SB}
  font-size: 14px;
  padding: 17px 70px;
  margin-top: 20px;
`;