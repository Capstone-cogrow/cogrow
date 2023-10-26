import { useMediaQuery } from "react-responsive";
import {
  FooterSection,
  FooterContainer,
  Row1,
  Row2,
  Col1,
  Col2,
  Col3,
  HeadTitle,
  Content,
  Links,
  Item,
  CopyrightText,  
} from "./style";


const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <Row1>
            <Col1>
              <HeadTitle>ABOUT</HeadTitle>
              <Content>Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</Content>
            </Col1>
            <Col2>
              <HeadTitle>QUICK LINKS</HeadTitle>
              <Links>
                <Item>코그로우 소개</Item>
                <Item>질병 진단</Item>
                <Item>농작물 관리</Item>
                <Item>레시피 추천</Item>
              </Links>
            </Col2>
            <Col2>
              <HeadTitle>MEMBERS</HeadTitle>
              <Links>
                <Item>Yeonhee Choi</Item>
                <Item>Younjin Ham</Item>
              </Links>
            </Col2>
          </Row1>
        </FooterContainer>
        <FooterContainer>
          <Row2>
            <Col3>
              <CopyrightText>Copyright &copy; 2023 All Rights Reserved by YounJin & Yeonhee</CopyrightText>
            </Col3>
          </Row2>
        </FooterContainer>
      </FooterSection>
    </>
  );
};

export default Footer;
