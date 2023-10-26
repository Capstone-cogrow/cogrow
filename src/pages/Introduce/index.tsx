import { useState } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ImageSection,
  ImageContainer,
  IntroImg,
  TextContainer,
  IntroText,
  IntroSection,
  IntroLogoImg,
  IntroTitle,
  IntroSubTitle,
} from "./style";

type User = {
  name: string;
};

const Introduce = () => {
  const [user, setUser] = useState<User>();

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "함윤진" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <ImageSection>
        <ImageContainer>
          <IntroImg />
        </ImageContainer>
        <TextContainer>
          <IntroText>농작물 질병의 모든 것,</IntroText>
          <IntroText>코그로우에서 시작하세요!</IntroText>
        </TextContainer>
      </ImageSection>

      <IntroSection>
        <IntroLogoImg />
          <IntroTitle>"나의 반려 작물과 함께 성장한다."</IntroTitle>
          <IntroSubTitle>cogrow 서비스는 농작물과 함꼐 성장하는 것을 의미합니다.</IntroSubTitle>
          <IntroSubTitle>농작물을 키우는 모든 사람을 위한 서비스로,</IntroSubTitle>
          <IntroSubTitle>여러분의 농작물을 관리하고 돌보는 일을 더욱 쉽고 즐겁게 만들어 줍니다.</IntroSubTitle>
      </IntroSection>
      
      <Footer/>
    </>
  );
};

export default Introduce;
