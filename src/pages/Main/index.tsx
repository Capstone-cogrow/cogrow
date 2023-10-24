import { useState } from "react";
import { Header } from "../../components/Header";
import Banner, { ImageFloat } from "./MainBanner";

import MainBannerImage from "../../assets/images/plant.png";
import MainBanner from "./MainBanner";
import AppBanner from "./AppBanner";
import ContentBanner from "./ContentBanner";

type User = {
  name: string;
};

const Main = () => {
  const [user, setUser] = useState<User>();

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "함윤진" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <MainBanner
        image={MainBannerImage}
        imageFloat={ImageFloat.Right}
        imageWidth={369.5}
        title="농작물 질병의 모든 것,코그로우에서 시작하세요!"
        summary="농작물을 한 눈에 확인하고, 건강 상태를 케어해보세요.   
        간편하고 효율적으로 관리할 수 있는 새로운 경험을 느껴 보세요."
      />

      <ContentBanner/>
    </>
  );
};

export default Main;
