import { useState } from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import CropCardGroup from "./CropCardGroup";
import MainTitle from "../../components/MainTitle";

type User = {
  name: string;
};

const CropsManage = () => {
  const [user, setUser] = useState<User>();
  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Younjin" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <MainTitle
        title="내 작물 관리"
      />

      <CropCardGroup
        values={[
          {
            id: 0,
            thumbnail: "https://picsum.photos/800/600",
            title: "방울이",
            subtitle: "토마토",
          },
          {
            id: 1,
            thumbnail: "https://picsum.photos/800/600",
            title: "포포",
            subtitle: "감자",
          },
          {
            id: 2,
            thumbnail: "https://picsum.photos/800/600",
            title: "애플이",
            subtitle: "사과",
          },
        ]}
      />
      
      <Footer />
    </>
  );
};

export default CropsManage;
