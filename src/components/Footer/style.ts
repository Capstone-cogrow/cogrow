import styled from "styled-components";
import FooterLogoImage from "../../assets/logo_img/logo_footer.png";
import { FONT_STYLE } from "../../styles/font";


export const FooterSection = styled.footer`
  background-color:#153120;
  padding:40px 0 40px;
  font-size:15px;
  line-height:24px;
  color:#69786F;
`;

export const FooterContainer = styled.div`
  text-align: center;
`;

export const Row1 = styled.div`
align-items: center;
display: inline-block;
border-bottom: 1px solid #D0D0D0;
`;

export const Row2 = styled.div`
`;

export const Col1 = styled.div`
  float: left;
  text-align: left;
  width: 500px;
  padding: 20px 10px 20px 0;
  
`;

export const Col2 = styled.div`
  float: left;
  text-align: left;
  padding: 20px 0 20px 60px;
`;

export const HeadTitle = styled.h6`
  color:#A8BFB2;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:1px;
`;

export const Content = styled.p`
  margin-top: 10px;
  line-height: 1.5em;
`;

export const Links = styled.ul`
  padding-left:0;
  list-style:none
`;

export const Item = styled.li`
  margin-top: 10px;
  display:block
`;

export const Col3 = styled.div`
  clear: both;
  margin-top: 20px;
`;

export const CopyrightText = styled.p`
  margin:0;
  color: #69786F;
  display: inline-block;
  width: 833px;
  text-align: left;
`;

