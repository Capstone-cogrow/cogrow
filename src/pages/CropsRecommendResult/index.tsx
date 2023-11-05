import { useState } from "react";
import { Header } from "../../components/Header";
import MainTitle from "../../components/MainTitle";
import Footer from "../../components/Footer";

import {
  ResultSection,
  LeftContainer,
  RightContainer,
  Image,
  Span,
  Title,
  Content,
  ButtonContainer,
  Button,
} from "./style";

type User = {
  name: string;
};

const CropsRecommendResult = () => {
  const [user, setUser] = useState<User>();

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "함윤진" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <MainTitle
      title="작물 추천 결과"
      />

      <ResultSection>
        <LeftContainer>
          <Image src="https://github.com/YounJ00/YounJ00.github.io/assets/91127380/099af24a-f0ed-4796-af97-bdd1dc598f42"></Image>
        </LeftContainer>
        <RightContainer>
          <Title>어울리는 작물은 <Span>"토마토"</Span> 입니다.</Title>
          <Content>토마모는 강한 빛을 좋아합니다. 하지만 너무 강하면 
            잎이 탈 수 있으므로 적절한 빛의 양을 유지해야 합니다. 
            일반적으로 직사광선 아래에서 키우는 것이 좋습니다.
          </Content>
          <Content>토양의 수분은 보통 20~30% 정도가 적당합니다.
            계절이나 지역, 기후 등에 따라 다르기 때문에 적절한
            수분 함량을 유지하기 위해 수시로 체크하는 것이 좋습니다.
          </Content>
          <Content>토마토는 하루에 두 번씩 오전과 오후에 물을 주는 것이 좋습니다.
            화분 밑으로 흘러나올 만큼 충분히 주고, 겉흙이 마르면 다시 줍니다.
          </Content>
          <ButtonContainer>
            <a href="/cropsRecommend"><Button>다시 추천받기</Button></a>
            <a href="/crops"><Button>완료</Button></a>
          </ButtonContainer>
        </RightContainer>
      </ResultSection>

      <Footer/>
    </>
  );
};

export default CropsRecommendResult;
