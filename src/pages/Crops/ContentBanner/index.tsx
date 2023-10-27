import { useState } from "react";
import {
  Section,
  CropsSection,
  CropsContainer,
  CropsImg,
  CropsText,
  FirstImg,
  SecondImg,
  CropsTitle,
  CropsSubTitle,
} from "./style";

type User = {
  name: string;
};

const CropsContentBanner = () => {
  const [user, setUser] = useState<User>();

  return (
    <>
      <Section>
        <CropsSection>
          <CropsContainer>
            <a href="/cropsManage">
            <CropsImg>
              <FirstImg/>
            </CropsImg>
            <CropsText>
              <CropsTitle>농작물 등록 및 관리</CropsTitle>
              <CropsSubTitle>내 작물들을 한눈에 관리할 수 있어요.</CropsSubTitle>
            </CropsText>
            </a>
          </CropsContainer>
          <CropsContainer>
            <a href="/cropsRecommend">
            <CropsImg>
              <SecondImg/>
            </CropsImg>
            <CropsText>
              <CropsTitle>농작물 추천</CropsTitle>
              <CropsSubTitle>나에게 어울리는 농작물을 추천받을 수 있어요.</CropsSubTitle>
            </CropsText>
            </a>
          </CropsContainer>          
        </CropsSection>
     </Section>
    </>
  );
};

export default CropsContentBanner;
