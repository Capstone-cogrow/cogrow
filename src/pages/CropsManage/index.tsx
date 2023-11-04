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
        title="작물 등록"
      />

      <CropCardGroup
        values={[
          {
            id: 0,
            thumbnail: "https://github.com/YounJ00/YounJ00.github.io/assets/91127380/22fd691e-2c17-4657-9e9b-4d9b0b279d2a",
            title: "방울이",
            subtitle: "토마토",
          },
          {
            id: 1,
            thumbnail: "https://github.com/YounJ00/YounJ00.github.io/assets/91127380/bab58793-6a1c-43f4-a5aa-233baa5fd53a",
            title: "포포",
            subtitle: "감자",
          },
          {
            id: 2,
            thumbnail: "https://github.com/YounJ00/YounJ00.github.io/assets/91127380/e717012d-d341-4707-aa35-101f912902b7",
            title: "코니",
            subtitle: "옥수수",
          },
        ]}
      />
      
      <Footer />
    </>
  );
};

export default CropsManage;
