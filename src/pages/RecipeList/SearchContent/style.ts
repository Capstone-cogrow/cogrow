import styled from "styled-components";
import { FONT_STYLE } from "../../../styles/font";
import RecipeImage from "../../../assets/images/recipe.png";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 5px;
`;

export const ImageIcon = styled.img.attrs({
  src: `${RecipeImage}`,
})`
  width: 95px;
`;

export const HeadTitle = styled.p`
  ${FONT_STYLE.SB}
  font-size: 22px;
  margin-top: 20px;
`;

export const SearchForm = styled.form`
  margin-top: 10px;
`;

export const Fieldset = styled.fieldset` 
`;

export const Input = styled.input`
  border-radius : 25px;
  box-shadow: 3px 3px 3px -1px #DBDBDB;
  border:0.1px solid #DBDBDB;
  padding: 17px 170px;
  margin-top: 25px;
  text-align: center;
  font-size: 16px;
  outline: none;

  @media screen and (max-width: 768px) {
    padding: 17px 100px;
  }
`;


export const SearchIcon = styled.img`
  height: 180px;
  border-radius: 27px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;