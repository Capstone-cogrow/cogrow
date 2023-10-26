import styled from "styled-components";
import MainLogoImage from "../../assets/logo_img/logo_web.ver.png";
import { FONT_STYLE } from "../../styles/font";

export const WrapperContainer = styled.nav`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  //border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 25px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  contain: style layout inline-size;
  background-color: #fff;
  border-bottom: 1px solid #EEEEEE;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 20px;
  }
`;

export const Tag_A = styled.a`
  text-decoration: none;
  color: black;
  ${FONT_STYLE.L}
  font-size: 15px;
`;

export const WebLogoContainer = styled.div`
  margin-right: 80px;
  padding-top: 0px;
  white-space: nowrap;

  @media screen and (max-width: 960px) {
    padding-top: 2.5px;
    margin: 0 auto;
  }
`;

export const MainLogoImg = styled.img.attrs({
  src: `${MainLogoImage}`,
})`
  width: 125px;
  height: 10%;
  margin: 0px 0 0 0px;
`;

export const UserContainer = styled.div<{ menu: boolean }>`
  width: auto;
  margin-left: 45px;
  padding-top: 5px;
  white-space: nowrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 10px;

    display: ${({ menu }) => {
      return menu === false ? "none" : "flex";
    }};
  }
`;

export const UserName = styled.span`
  color: #333;
  font-size: 14px;
  margin-right: 10px;
  white-space: nowrap;

  @media screen and (max-width: 960px) {
    margin-bottom: 20px;
    white-space: nowrap;
  }
`;

//----------DropDown Menu----------//
export const MainMenubar = styled.ul<{ menu: boolean }>`
  padding-left: 70px;
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  width: auto;

  :after {
    content: "";
    clear: both;
    display: block;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    //overflow: hidden;
    margin-top: 10px;
    padding-left: 0px;
    width: 100%;

    display: ${({ menu }) => {
      return menu === false ? "none" : "flex";
    }};
  }
`;

export const MainMenubarList = styled.li`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  //border: 1px solid red;

  & > a {
    display: block;
    padding: 15px 15px;
    //border: 1px solid red;
    text-decoration: none;
    align-self: center;
    //line-height: 1em;
    color: black;
    ${FONT_STYLE.M}
    letter-spacing: 1px;
    font-size: 14px;
  }

  & > a:hover {
    background-color: #f2f4f6;
    border-radius: 0.6em;
  }

  :hover > ul {
    display: block;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;

    & > a {
    display: block;
    width: 96%;
    line-height: 1.5em;
    }

    & > a:hover {
    background-color: #f2f4f6;
    border-radius: 0.6em;
  }
  }

  @media screen and (min-width: 960px) {
    :hover > ul {
      padding-top: 15px;
      height: 70px; /*서브메뉴 li한개의 높이 50*5*/
      overflow: visible;
    }
  }
`;

export const SubMenubar = styled.ul`
  list-style: none;
  max-width: 300px;
  width: 100%;
  height: 0;

  overflow: hidden;

  @media screen and (max-width: 960px) {
    border-radius: 0em;
    padding: 0px;
    max-width: 100%;
    transition-duration: 0.5s;
    //transition: height 0.5s ease;
  }
  @media screen and (min-width: 960px) {
    transition-duration: 0.5s;
    //transition: height 0.5s ease;
  }
`;

export const SubMenubarList = styled.li`
  float: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    display: block;
    padding: 9px 0;
    text-decoration: none;
    color: black;
    ${FONT_STYLE.L}
    letter-spacing: 1px;
    font-size: 14px;
  }

  & > a:hover {
    color: #0075ff;
  }
`;

//----------토글 버튼 이벤트 처리----------//
export const ToggleBtn = styled.a`
  position: absolute;
  width: 15px;
  right: 10px;
  top: 13px;
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    padding: 15px 20px;
  }
`;
