import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";
import TipImage from "../../../assets/images/Tip.png";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LeftContainer = styled.form`
@media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const HeadTitle = styled.p`
  ${FONT_STYLE.M}
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  border-radius: 13px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  width: 230px;
  height: 250px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
`;

export const Add = styled.button`
  background-color: #F5FAF2;
  border-radius : 10px;
  box-shadow: 3px 3px 3px -1px #E6E6E6;
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #40B36E;
  ${FONT_STYLE.SB}
  font-size: 14px;
  padding: 10px 28px;
  margin-right: 25px;
`;

export const Delete = styled.button`
  background-color: #F5FAF2;
  border-radius : 12px;
  box-shadow: 3px 3px 3px -1px #E6E6E6;
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #40B36E;
  ${FONT_STYLE.SB}
  font-size: 14px;
  padding: 10px 28px;
`;

export const RightContainer = styled.form`
  margin-left: 100px;
  @media screen and (max-width: 768px) {
    margin: 70px auto;
  }
`;

export const ImgTip = styled.img.attrs({
  src: `${TipImage}`,
})`
  width: 350px;
  margin: 0px 0 0 0px;
`;

export const Registor = styled.button`
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
  padding: 15px 40px;
`;